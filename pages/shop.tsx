import { NextPage } from "next/types";
import ArtCard, { ArtCardProps } from "../components/ArtCard";

export const Shop: NextPage = () => {
  const data: Array<ArtCardProps> = [
  ];
  return (
    <div>
        {data.map((d) => <ArtCard {...d}/>)
        }
    </div>
  );
}
