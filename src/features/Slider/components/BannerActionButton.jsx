import { Button } from "@/components/ui/button"

const BannerActionButton = () => {
    return (
        <>
            <Button className={'w-45 bg-transparent rounded-2xl text-md text-blue-300 border-2 border-blue-300 font-extrabold hover:bg-blue-300 hover:text-blue-100 transition-colors delay-100 px-3 py-4 mt-2'}>
                Get started
            </Button>
        </>
    )
}

export default BannerActionButton