import { HiChevronDown } from "react-icons/hi";
import { landingPageData } from "@/data/landing-page";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Images } from "@/utils/Images";

export const Header: React.FC = () => {
  const { header } = landingPageData;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-sm relative overflow-hidden flex items-center justify-center">
            <Image src={Images.logo} alt="" width={80} height={80} />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {header.nav.map((item) =>
            item.hasDropdown && item.children ? (
              <div key={item.label} className="relative group">
                <button className="text-sm font-medium flex items-center gap-1 transition-colors text-zinc-800 hover:text-black cursor-pointer">
                  {item.label}
                  <HiChevronDown className="h-4 w-4 text-zinc-400 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-sm border border-zinc-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-1">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      target={child.href.startsWith("http") ? "_blank" : undefined}
                      rel={child.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-black transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                  item.active ? "text-red-600" : "text-zinc-800 hover:text-black"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a href={header.cta.href}>
            <Button size="md" className="h-10 px-6 text-sm font-bold uppercase tracking-wide">
              {header.cta.label}
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
