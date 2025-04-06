
export default function Contact() {
  return (
    <div className="wrapper p-[16px] flex flex-col gap-[6px]">
      <h1 className="text-[24px] font-bold">
        Contact
      </h1>
      <ContactCard name="John Doe" description="A good person" imageUrl="https://avatar.iran.liara.run/public?test=1" />
      <ContactCard name="Jane Jan" description="A bad person" imageUrl="https://avatar.iran.liara.run/public?test=2" />
      <ContactCard name="Pete Peterson" imageUrl="https://avatar.iran.liara.run/public?test=3" />
      <ContactCard name="Justin Timberlake" imageUrl="https://avatar.iran.liara.run/public?test=4" />
    </div>
  )
}