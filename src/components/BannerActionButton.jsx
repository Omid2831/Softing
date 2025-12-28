import { Button } from "./ui/button";

const BannerActionButton = () => {
    return (
        <>
            <Button className={'bg-transparent text-md text-blue-300 border-2 border-blue-300 font-extrabold hover:bg-blue-300 hover:text-blue-100 transition-colors delay-100'}>
                Get started
            </Button>
        </>
    )
}

export default BannerActionButton