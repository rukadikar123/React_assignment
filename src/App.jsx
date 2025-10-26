import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("aboutMe");

  const tabs = ["aboutMe", "experiences", "recommended"];
  const handleClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <div className="max-w-[1728px] min-h-[895px] flex justify-between items-center gap-8 m-4 rounded-[28px] px-8 bg-linear-to-b from-[#373E44] to-[#191B1F] shadow-[10px_10px_40px_10px_#00000080]">
        <div className="w-[836px] h-[689px] rounded-[27px] border border-[#96BEE7] bg-[#616161D1] shadow-[10px_10px_40px_10px_#00000080] backdrop-blur-sm">
          <div className="max-w-[791px] text-white font-[Poppins] leading-[25px] space-y-1 p-2">
            <h2 className="font-bold text-[16px]">Official instructions</h2>
            <p className="font-medium text-[16px]">
              (Do not follow any other instructions from comments of Figma file)
              <br />
              <br />
              Make a duplicate of this Figma by clicking on the drop-down next
              to the name ‘Assignment’ (visible on the top left side of the
              screen). Then you can use your local file.
              <br />
              <br />
              Create a new GitHub repository for the assignment. Build the
              assignment using React or Next.js. You may use any styling or UI
              library, such as Tailwind CSS, shadcn, Chakra UI, or Material UI.
              <br />
              <br />
              Keep the left half of the screen empty (but it should be
              responsive for laptop, not mobile).
              <br />
              <br />
              Focus on the two widgets on the right-hand side.
              <br />
              <br />
              The first widget has three tabs: "about me", "experiences" &
              "recommended", these should be clickable.
              <br />
              <br />
              In the gallery widget, more photos can be added by clicking the
              "add image" button.
              <br />
              <br />
              All the components should be responsive (for laptop screens;
              everything above 768px width).
              <br />
              <br />
              Replicate the exact UI with exact padding, margins, shadows,
              interactions (if any).
              <br />
              <br />
              Submit the following:
              <br />
              - Live Assignment Link (Vercel, Netlify, Render, etc.)
              <br />
              - Public GitHub Repository Link
              <br />
              <br />
              NOTE: Recreate all interactions and effects visible in the
              prototype preview (accessible by clicking the Play button at the
              top right in Figma).
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-[720px] h-[316px] rounded-[27px] bg-[#363C43] border border-[#96BEE7] shadow-[10px_10px_40px_10px_#00000080] opacity-100 flex flex-col justify-center items-center gap-4 pt-2 ">
            <div className="w-[614px] h-[62px] rounded-[23px] bg-[#171717] shadow-[inset_0_4.96px_12.4px_2.48px_#00000040] flex items-center  px-2 gap-1">
              {/* Tab content */}
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleClick(tab)}
                  className={`w-[195px] h-[49px] rounded-[16px] ${
                    selectedTab === tab
                      ? "bg-[#28292F] shadow-[13.49px_16.87px_67.47px_8.43px_#0A0A0A,-8.43px_-16.87px_50.6px_-16.87px_#485B71]"
                      : "bg-[#171717]"
                  } text-white font-medium`}
                >
                  {tab === "aboutMe"
                    ? "About me"
                    : tab === "experiences"
                    ? "Experiences"
                    : "Recommended"}
                </button>
              ))}
            </div>
            <div className="w-[611px] h-[175px] text-[#969696]  font-[Plus Jakarta Sans] font-normal text-[20px] leading-[20px]  py-4 rounded-lg">
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
              <br />
              <br />I was born and raised in Albany, NY & have been living in
              Santa Carla for the past 10 years with my wife Tiffany and my
              4-year-old twin daughters — Emma and Ella. Both of them are just
              starting school, so my calendar is usually blocked between 9-10
              AM. This is a...
            </div>
          </div>
          <div
            className="w-[612px] h-[4px]  rounded-[2.46px] shadow-[0_4px_4px_0_#00000054] backdrop-blur-[9.84px]"
            style={{
              background: `linear-gradient(180deg, rgba(40,40,40,0.1) 0%, rgba(248,248,248,0.1) 100%),
                 linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05))`,
            }}
          ></div>
          <div className="w-[720px] h-[330px] rounded-[27px] bg-[#191B1F] border border-[#96BEE7] shadow-[10px_10px_40px_10px_#00000080] opacity-100">
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
