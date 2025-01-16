import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Loader2Icon } from "lucide-react";
import type { ElementType } from "react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
    logo: ({
        iconProps,
        as,
        className,
        classNameText,
    }: {
        iconProps?: IconProps;
        as?: ElementType;
        className?: string;
        classNameText?: string;
    }) => {
        const Comp = as ?? "div";
        return (
            <Comp
                className={cn(
                    "flex items-center space-x-2 text-lg font-semibold",
                    className,
                )}
            >
                <Icons.logoIcon
                    className={cn("h-5 w-5 fill-primary", iconProps?.className)}
                    {...iconProps}
                />
                <span className={classNameText}>{siteConfig.name}</span>
            </Comp>
        );
    },
    logoIcon: (props: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1690 1701"
            {...props}
        >
            <path d="M638.417,1469.06l-637.388,-475.034l740.176,-993.148l535.683,399.236c-92.739,-54.608 -200.841,-85.916 -316.259,-85.916c-344.789,0 -624.279,279.49 -624.279,624.279c0,134.05 42.244,258.228 114.165,359.947l640.056,-418.067c163.549,329.093 108.241,352.648 62.886,345.448c-11.129,-1.756 -21.8,-5.725 -31.593,-11.309c-400.156,-228.171 -214.807,89.852 -168.415,163.728c9.454,15.059 14.26,32.75 12.844,50.481c-8.777,109.385 -230.997,65.028 -327.876,40.355Zm675.213,-1041.56l375.402,279.78l-109.723,147.224c-13.456,-100.103 -50.635,-192.674 -105.694,-271.883l-648.612,423.672c-163.549,-329.093 -108.242,-352.648 -62.887,-345.448c11.13,1.756 21.8,5.725 31.593,11.309c400.137,228.151 214.808,-89.852 168.416,-163.728c-9.474,-15.059 -14.281,-32.75 -12.845,-50.481c10.253,-127.65 311.136,-45.923 364.35,-30.445Zm-256.665,1127.87l-108.108,145.057l-285.875,-213.057c88.468,48.076 189.857,75.388 297.647,75.388c32.763,-0 64.936,-2.524 96.336,-7.388Z" />
        </svg>
    ),
    twitter: (props: IconProps) => (
        <svg
            viewBox="0 0 1200 1227"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
        </svg>
    ),
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    loader: (props: IconProps) => (
        <Loader2Icon
            {...props}
            className={cn(
                "animate-spin transition-all duration-400",
                props.className,
            )}
        />
    ),
    hamburger: (props: IconProps) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M3 5H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
            <path
                d="M3 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
            <path
                d="M3 19H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    ),
};