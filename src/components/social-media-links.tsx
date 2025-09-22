import { navigation } from "@/data/navigation";

export function SocialMediaLinks(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ul className="flex items-center justify-between gap-3">
        {Object.values(navigation.socials).map((item, index) => (
          <li key={index} className="mx-2">
            <a href={item.href}>
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
