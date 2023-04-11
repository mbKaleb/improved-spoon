import Image from "next/image"

export default function Header() {
	return (
		<header className="flex justify-center h-16 p-5 bg-black sticky top-0 z-50">
			<Image className="margin-left-auto -top-14 absolute" src="/../public/amazon-basics-logo.png" alt="amazon basics logo" width={'200'} height={'5'} />
			{/* <Link href="/" className="px-2 py-1 bg-white font-bold rounded-lg">Home</Link> */}
		</header>
	)
}