import { EventType } from "@/types/eventType";
import Image from "next/image";

const SingleEvent = ({ event }: { event: EventType }) => {
  const { image, name, area } = event;
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="shadow-testimonial dark:bg-dark group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 dark:shadow-none h-full flex flex-col justify-between">
        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px] rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            className="object-cover rounded-full"
            layout="fill"
          />
        </div>
        <div className="text-center">
          <h3 className="text-dark mb-1 text-lg font-semibold dark:text-white h-14 overflow-hidden">
            {name}
          </h3>
          <p className="text-body-color dark:text-dark-6 mb-5 text-sm">
            {area}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
