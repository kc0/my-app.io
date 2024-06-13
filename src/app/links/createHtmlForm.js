export default function LinksCreateHtmlForm() {
   
    return <>
        <form action = "/api/links" method="POST">
            <input type="text" defaultValue="https://github.com/kc0/my-app.io" name="url" placeholder="Your url to shorten"/>
            <button type="submit">Shorten</button>
        </form>
    </>
}