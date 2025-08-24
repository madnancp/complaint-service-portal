import { GithubIcon, Info } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
	return (
		<div className="top-0 w-full h-22 p-3 px-10">
			<header className="bg-white/10 backdrop-blur-md w-full h-full rounded-full border flex items-center px-5 justify-between">
				<Button className="rounded-full">Complaint Service Portal</Button>
				<div className="flex gap-4">
					<Button className="rounded-full">
						<GithubIcon />
						<span>Github</span>
					</Button>

					<Button className="rounded-full">
						<Info />
						<span>About</span>
					</Button>
				</div>
			</header>
		</div>
	)
}

export default Header;
