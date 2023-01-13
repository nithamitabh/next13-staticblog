import fs from "fs";
import Link from "next/link";
const getPostMetadata = () => {
    const folder = "posts/"
    const files = fs.readdirSync(folder);
    const markdownPost = files.filter((file) => file.endsWith(".md"));
    const slugs = markdownPost.map((file) => file.replace(".md",""));
    return slugs;
}
const HomePage = () => {
    const postData = getPostMetadata()
    const postPreview = postData.map((slug) =>(
        <div>
            <Link href={`/posts/${slug}`}><h2>{slug}</h2></Link>
        </div>
    ))
    return <div>{postPreview}</div>
}
export default HomePage