import { TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Facebook, Github, Link, X, Youtube } from "lucide-react";
import { Tooltip, TooltipContent } from "@/src/components/shadcn/tooltip";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
};

const socialLink = [
  {
    title: "Facebook",
    href: "www.facebook.com",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "youtube",
    href: "www.youtube.com",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "www.x.com",
    icon: <X className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "www.github.com",
    icon: <Github className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <a
                href={item?.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-lightColor hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent className={cn('bg-gray-400 text-darkColor font-semibold border border-black',tooltipClassName)}>
                {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
