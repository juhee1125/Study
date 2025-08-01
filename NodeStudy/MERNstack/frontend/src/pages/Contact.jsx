// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

export function Contact() {

    function handleSubmit() {
        //call API function (if we had one)
    }

    return (
        <div className="w-1/3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2 text-primary">Contact Us</h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-center">Have questions or feedback? Feel free to reach out to us!</p>
            <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-center">You can contact us via email at <a href="mailto:contact@example.com">contact@example.com</a>.</p>
            <p className="leading-7 [&:not(:first-child)]:mt-6 whitespace-pre-wrap text-center mb-8">Alternatively, you can fill out the form below:</p>
            <form onSubmit={handleSubmit}>
                <label className="flex left-0 p-2">Name:</label>
                <input type="text" name="name" />
                <label className="flex left-0 p-2">Email:</label>
                <input type="email"  name="email" />
                <label className="flex left-0 p-2">Message:</label>
                <textarea name="message"></textarea>
                <button type="submit" className="mt-4">Send</button>
            </form>
        </div>
    )
}