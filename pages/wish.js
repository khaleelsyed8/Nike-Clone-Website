import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import Wishlist from "@/components/Wishlist";
import { useSelector } from "react-redux";


const Wish = () => {
    const { wishlist } = useSelector((state) => state.wish);

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {wishlist.length > 0 && (
                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                                Wishlist
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                <div className="text-lg font-bold">
                                    Products You Like
                                </div>
                                {wishlist.map((item) => (
                                    <Wishlist key={item.id} data={item} />
                                ))}
                            </div>
                            {/* CART ITEMS END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                )}

                {/* This is empty screen */}
                {wishlist.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            Your Wishlist is empty
                        </span>
                        <span className="text-center mt-4">
                            Looks like you have not added anything in your Wishlist.
                            <br />
                            Go ahead and explore top categories.
                        </span>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Wish;
