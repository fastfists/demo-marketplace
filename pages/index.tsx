import type { NextPage } from 'next'
import ArtCard from '../components/ArtCard'
import type { ArtCardProps } from '../components/ArtCard';
import { Template } from '../components/Template'

const Home: NextPage = () => {
  const data: Array<ArtCardProps> = [
    {
      id: 1,
      image_url : "/the_stand.jpg",
      art_title : "The Stand Off",
      artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
      category : "The Moments",
      body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 2,
        image_url: "the_chair.jpg",
        art_title: "The Chair",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 3,
        image_url: "the_fight.jpg",
        art_title: "The Fight",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 4,
        image_url: "the_guitar_1.jpg",
        art_title: "The Guitar 1",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 5,
        image_url: "the_guitar_2.jpg",
        art_title: "The Guitar 2",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 6,
        image_url: "the_kiss.jpg",
        art_title: "The Kiss",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 7,
        image_url: "the_liftoff.jpg",
        art_title: "The Liftoff",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 8,
        image_url: "the_plea.jpg",
        art_title: "The Plea",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 9,
        image_url: "the_plot.jpg",
        art_title: "The Plot",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 10,
        image_url: "the_pose.jpg",
        art_title: "The Pose",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 11,
        image_url: "the_sky.jpg",
        art_title: "The Sky",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 12,
        image_url: "the_stand.jpg",
        art_title: "The Stand",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        id: 13,
        image_url: "the_tango.jpg",
        art_title: "The Tango",
        artists : ["Denzell Michael Ford", "Edith Mary Oyugi"],
        category : "The Moments",
        body_text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
  ];
  return (
    <Template>
      <main className="m-auto w-11/12 flex flex-row flex-wrap justify-between space-y-3">
        {data.map((elem) => <ArtCard {...elem} />)
        }
      </main>
    </Template>
  )
}

export default Home
