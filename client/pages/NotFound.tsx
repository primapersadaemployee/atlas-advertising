import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BGNotFound from "/images/404.png";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[90vh] flex items-center justify-center">
        <div className="text-center" data-aos="zoom-in">
          <img
            src={BGNotFound}
            alt="404"
            className="w-1/2 lg:w-1/4 h-auto mx-auto"
            data-aos="bounce"
            data-aos-delay="200"
          />
          <p className="text-xl text-atlas-blue/80 mb-8" data-aos="fade-up">
            Halaman tidak ditemukan
          </p>
          <div data-aos="fade-up" data-aos-delay="600">
            <Button asChild className="bg-atlas-red hover:bg-atlas-red/90">
              <Link to="/">Kembali ke Beranda</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
