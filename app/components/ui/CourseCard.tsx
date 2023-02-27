import { CourseType } from "@customTypes/course.types";
import Image from "next/image";

type cardTypes = {
  loading: boolean;
  data: CourseType;
};

export const CourseCard = ({ loading, data }: cardTypes) => {
  if (loading) {
    return (
      <div className="bg-white shadow">
        <div className="relative h-[150px] overflow-hidden bg-slate-300">
          {/* <img
						className="h-full w-full object-cover"
						src="img/course_bg_mock.png"
						alt="course bg"
					/> */}
          <div className="absolute bottom-3 left-3 h-6 w-[30%] animate-pulse bg-[#2c313180] px-2 text-white backdrop:blur-xl">
            {/* 20 alumnos */}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 py-4 px-4">
          <div className=" h-2 w-full animate-pulse rounded bg-slate-300 text-lg font-bold">
            {/* Estimación de recursos con leapfrog geo y leapfrog edge */}
          </div>
          <p className="h-2 w-[40%] animate-pulse rounded bg-slate-300 font-bold">
            {/* Nivel avanzado */}
          </p>
          <p className="h-16 w-full animate-pulse rounded bg-slate-300">
            {/* Da el siguiente paso y aprende al más alto nivel el uso
						de Leapfrog Aplicado a la minería viendo variogramas,
						compósitos, etc. */}
          </p>
          <p className="h-6 w-[20%] animate-pulse rounded bg-slate-300">
            {/* s/.165 */}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white shadow">
      <div className="relative h-[150px] overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          src="img/course_bg_mock.png"
          alt="course bg"
        />
        <div className="absolute bottom-3 left-3 bg-[#2c313180] px-2 text-white backdrop:blur-xl">
          {data.students_quantity}
        </div>
      </div>
      <div className="flex h-[250px] flex-col gap-1 overflow-hidden py-4 px-4">
        <div className="flex grow flex-col gap-1 overflow-hidden">
          <h3 className=" flex-none text-lg font-bold line-clamp-2">
            {data.title}
          </h3>
          <p className="flex-none font-bold">{data.level}</p>
          <p className="flex text-sm  line-clamp-3">{data.description}</p>
        </div>

        <div className="flex flex-none justify-between">
          <p className="py-2 font-serif text-2xl font-bold">s/.{data.price}</p>
          {/* <AddToCartButton courseData={data} /> */}
        </div>
      </div>
    </div>
  );
};
