import MaxWidthContainer from "@/app/(website)/_components/max-width";
import cn from "@/core/utils/class-names";
import StickyHeader from "@/layouts/sticky-header";
import Topbar from "@/layouts/_website/header/topbar";
import Logobar from "@/layouts/_website/header/logobar";
import Menubar from "@/layouts/_website/header/menubar";

const Header = () => {
  return (
    <>
      <Topbar />
      <Logobar />
      <Menubar/>
      {/* <StickyHeader className={cn("z-[990]")}></StickyHeader> */}
    </>
  );
};

export default Header;
