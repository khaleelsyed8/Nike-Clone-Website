import React from 'react'
import {BsCloudDownload} from "react-icons/bs";
import {BsDatabaseAdd} from "react-icons/bs";
import {FaStripeS} from "react-icons/fa"
import { TbBrandRedux } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import {TbBrandNextjs} from "react-icons/tb";
  import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <>
    <main>
                {/* heading and paragaph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Welcome To My About Section...
                    </div>
                    <div className="text-md md:text-xl text-justify">
                    Our shoe store website project is built with cutting-edge technologies to provide a modern, 
                    user-friendly website that showcases your products and offers an exceptional user experience. 
                    We used Next.js for efficient loading and easy routing, 
                    Strapi for content management, 
                    Cloudinary for optimized image storage, 
                    and PostgreSQL for a reliable and scalable online database. 
                    This ensures your website is fast, efficient, 
                    and able to handle a large number of users and transactions. 
                    </div>
                </div>
                {/* heading and paragaph end */}
        </main>
    {/* card menu */}
<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
    <Card className="mt-6 w-96 bg-zinc-100">
      <CardBody className="p-5">
        <TbBrandNextjs className="text-black-500 w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Next JS
        </Typography>
        <Typography>
          Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2 p-5">
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            Learn More 
            </a>
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
    <Card className="mt-6 w-96 grey bg-zinc-100">
      <CardBody className="p-5">
        <BsCloudDownload className="text-black-500 w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Cloudinary
        </Typography>
        <Typography>
          Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="https://cloudinary.com" target="_blank" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2 p-5">
          Learn More
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
    <Card className="mt-6 w-96 grey bg-zinc-100">
      <CardBody className="p-5">
        <BsDatabaseAdd className="text-black-500 w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Render
        </Typography>
        <Typography>
          Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="https://render.com" target="_blank" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2 p-5">
          learn more
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
    <Card className="mt-0 w-96 grey bg-zinc-100">
      <CardBody className="p-5">
        <FaStripeS className="text-black-500 w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Stripe
        </Typography>
        <Typography>
          Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="https://stripe.com/en-in" target="_blank" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2 p-5">learn more
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
    <Card className="mt-0 w-96 grey bg-zinc-100">
      <CardBody className="p-5">
        <TbBrandRedux className="text-black-500 w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Redux
        </Typography>
        <Typography>
          Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="https://redux.js.org" target="_blank" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2 p-5">learn more
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
    <Card className="mt-0 w-96 grey bg-zinc-100">
      <CardBody className="p-5">
        <SiTailwindcss className="text-black-500 w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Tailwind
        </Typography>
        <Typography>
          Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="https://tailwindcss.com" target="_blank" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2 p-5">learn more
            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
    </div>
    {/* end of card section */}
    </>
  )
}

export default About