import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-atlas-blue mb-4">404</h1>
          <p className="text-xl text-atlas-blue/80 mb-8">Halaman tidak ditemukan</p>
          <Button asChild className="bg-atlas-red hover:bg-atlas-red/90">
            <Link to="/">
              Kembali ke Beranda
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
