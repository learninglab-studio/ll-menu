import fs from "fs"
import path from "path"
import Stringify from "../../components/utilities/stringify"
import Link from "next/link"

export default function SiteMap (props) {
    return (
        <div>
            <h1>sitemap</h1>
            {/* <Stringify data={props} /> */}
            <ul>
              {props.slugs.map((e, i)=>{
                return (
                  <li key={i}><Link href={e.slug}>{e.slug}</Link></li>
                )
              })}
            </ul>
        </div>
    )
}

export async function getStaticProps(context) {
    const getAllFiles = function(dirPath, arrayOfFiles) {
      let files = fs.readdirSync(dirPath)

      arrayOfFiles = arrayOfFiles || []

      files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
          arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
          if (!file.includes("_app.js") && !file.includes(".DS_") && !file.includes("]") && !file.includes("index.js")) {
            arrayOfFiles.push({
              file: `${dirPath}/${file}`,
              slug: (`${dirPath}/${file}`.split('pages')[1]).replace(/\.[^/.]+$/, "")
            })
          }
        }
      })
      return arrayOfFiles
    }
    let allTheFiles = await getAllFiles(`pages`)
    let paths = allTheFiles.map(e => {
      if (e.slug !== ("DS_Store" | "_app.js")) {
        
      } else {
        
      }
    })
    return {
      props: { slugs: allTheFiles }, // will be passed to the page component as props
    }
  }

