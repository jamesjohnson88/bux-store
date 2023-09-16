import Header from '../components/header'
import NavigationBar from "@/components/navigation-bar";

const navigationItems = [
    {
        label: 'By Category',
        links: ['User Experience', 'User Interface', 'User Real Piece of Sh*t'],
    },
    {
        label: 'By Author',
        links: ['Mona Lott', 'Ava P. Encil', 'Hu-Ann Contrast'],
    },
];

export default function Home() {
  return (
    <div id="main">
        <Header />
        <NavigationBar items={navigationItems}/>
    </div>
  )
}
