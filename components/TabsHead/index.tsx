import Button from "@/components/Button";

export default function TabsHead({
  activeTab = "",
  data = [],
  fn = () => {}
}: {
  activeTab?: string;
  data: { title: string }[];
  fn: (title: string) => void;
}) {
  // On click of the button add the active class to the button
  // and remove it from the other buttons

  return (
    <div className="tabHeads gap-2 flex">
      {data.map((tab) => {
        console.log(activeTab === tab.title, activeTab, tab.title);
        return (
          <Button
            key={tab.title}
            text={tab.title}
            active={activeTab === tab.title}
            variant="secondary"
            fn={() => fn(tab.title)}
          />
        );
      })}
    </div>
  );
}
