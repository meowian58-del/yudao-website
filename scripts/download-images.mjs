import { createWriteStream, existsSync, mkdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { get } from 'node:https'

const root = dirname(dirname(fileURLToPath(import.meta.url)))

const images = [
  {
    url: 'https://images.unsplash.com/photo-1613690399151-65ea69478674?auto=format&fit=crop&fm=jpg&q=78&w=2200',
    file: 'public/assets/photos/hero-cargo-ship.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1648369684797-bcd5b8252bd4?auto=format&fit=crop&fm=jpg&q=78&w=1400',
    file: 'public/assets/photos/port-cranes.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1649872136245-6070c1a71349?auto=format&fit=crop&fm=jpg&q=78&w=1400',
    file: 'public/assets/photos/aerial-container-ship.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1734213025320-1aa0c14d01b4?auto=format&fit=crop&fm=jpg&q=78&w=1400',
    file: 'public/assets/photos/warehouse-logistics.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1541969487406-1f1adf3884ab?auto=format&fit=crop&fm=jpg&q=78&w=1400',
    file: 'public/assets/photos/freight-truck.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1724525231969-173f10849bb1?auto=format&fit=crop&fm=jpg&q=78&w=1400',
    file: 'public/assets/photos/container-yard.jpg',
  },
]

mkdirSync(join(root, 'public/assets/photos'), { recursive: true })

for (const image of images) {
  const target = join(root, image.file)
  if (existsSync(target) && statSync(target).size > 10_000) {
    console.log(`Image already exists: ${image.file}`)
    continue
  }
  await download(image.url, target)
  console.log(`Downloaded: ${image.file}`)
}

function download(url, target) {
  return new Promise((resolve, reject) => {
    const request = get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        response.resume()
        download(response.headers.location, target).then(resolve, reject)
        return
      }

      if (response.statusCode !== 200) {
        response.resume()
        reject(new Error(`Failed to download ${url}. HTTP ${response.statusCode}`))
        return
      }

      const stream = createWriteStream(target)
      response.pipe(stream)
      stream.on('finish', () => {
        stream.close(resolve)
      })
      stream.on('error', reject)
    })

    request.on('error', reject)
    request.setTimeout(30_000, () => {
      request.destroy(new Error(`Timed out downloading ${url}`))
    })
  })
}
