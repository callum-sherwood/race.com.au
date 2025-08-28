import WebsiteLayout from "@/layouts/_website/layout";

type Props = {
    children:React.ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <WebsiteLayout>
        {children}
    </WebsiteLayout>
  )
}

export default Layout