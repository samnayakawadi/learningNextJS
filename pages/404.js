import { useRouter } from "next/router"
import { useEffect } from "react"

const PageNotFound = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    })

    return (
        <div>404</div>
    )
}

export default PageNotFound