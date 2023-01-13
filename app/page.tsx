import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";
const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/"
    const files = fs.readdirSync(folder);
    const markdownPost = files.filter((file) => file.endsWith(".md"));
    const posts = markdownPost.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`,"utf-8")
        const matterResult = matter(fileContents);
        return{
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md","")
        };
    });
    return posts;
}
const HomePage = () => {
    const postData = getPostMetadata()
    const postPreview = postData.map((post) =>(
        <div>
            <Link href={`/posts/${post.slug}`}><h2>{post.title}</h2>
            <p>{post.subtitle}</p>
            <p>{post.date}</p></Link>
        </div>
    ))
    return <div>{postPreview}</div>
}
export default HomePage