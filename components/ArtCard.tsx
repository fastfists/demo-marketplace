import Card from "./Card"
import Spacer from "./Spacer";

type ArtCardProps = {
    image_url?: string,
    art_title?: string,
    artists?: string[],
    category?: string,
    body_text?: string,
    id: number,
};

const ShopCard = (props: ArtCardProps) => {
    return(
        <div className="">
        </div>
    );
}

const ArtCard = (props: ArtCardProps) => {
    return (
        <Card image_url={props.image_url}>
            <div className="flex flex-row">
                <p className="font-medium text-xl">
                    "{props.art_title}"
                </p>
                <Spacer />
                <p className="text-gray-300">
                    #{props.id}
                </p>
            </div>
            <hr className="mb-2"/>
            <p className="text-sm flex flex-row space-x-2">
                {props.artists == undefined ? "anonymous" : props.artists.map((name) => <span> {name} </span>)}
            </p>
            <p className="text-teal-100 text-sm">
                {props.category}
            </p>
            <p className="text-sm">
                {props.body_text}
            </p>
        </Card>

      );
}

export default ArtCard;
export type { ArtCardProps }
