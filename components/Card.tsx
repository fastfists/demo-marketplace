import Image from "next/image";
import { ReactNode } from "react";

type CardProps = {
    image_url?: string,
    children: ReactNode,
}

const Card = ({image_url, children}  : CardProps ) => {
    return (
        <div className="flex flex-row space-x-4 rounded-xl bg-teal-900 md:w-4/12 md:flex-col">
            {image_url != undefined && <img className="rounded-xl w-3/5 md:w-fit" src={image_url}/> }
            <div className="px-2 py-4 ml-5 flex flex-col text-white">
                {children}
            </div>
        </div>
    );
}

export default Card;
