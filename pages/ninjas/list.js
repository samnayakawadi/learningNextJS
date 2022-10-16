import { useRouter } from "next/router"

export const getStaticProps = async () => {

    // Thanks to Free API Creation Tool https://quickmocker.com/
    const res = await fetch('https://0j69r62shg.api.quickmocker.com/users')
    const data = await res.json()

    return {
        props: { ninjas: data }
    }
}

const List = ({ ninjas }) => {

    const router = useRouter()

    return (
        <div className="m-0">
            {
                ninjas.map(singleNinja => {
                    return <div style={{ cursor: "pointer" }} className="box p-2 m-2" key={singleNinja.id} onClick={() => { router.push("/ninjas/list/" + singleNinja.id) }}>
                        <h3>{singleNinja.id}. {singleNinja.name}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default List