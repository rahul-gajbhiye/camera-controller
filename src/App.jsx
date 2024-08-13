import { Input } from "@/components/ui/input";

import { Button } from "./components/ui/button";

import { Slider } from "@/components/ui/slider";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function App() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border h-screen w-screen"
    >
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel
            defaultSize={70}
            className="videoContainer flex h-screen"
          >
            <video controls autoplay className="w-full h-full object-cover ">
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                type="video/mp4"
              ></source>
            </video>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30}>
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel
                defaultSize={25}
                className="flex flex-col p-6 flex justify-center items-center bg-blue-200"
              >
                <div className="relative w-40 h-40 flex flex-col items-center">
                  {/* Up Arrow */}
                  <Button className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </Button>

                  {/* Left Arrow */}
                  <Button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </Button>

                  {/* Down Arrow */}
                  <Button className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Button>

                  {/* Right Arrow */}
                  <Button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel
                defaultSize={75}
                className="flex flex-col justify-center bg-blue-200"
              >
                <div className="flex h-full items-center justify-center p-6">
                  <Slider defaultValue={[33]} max={100} step={1} />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        defaultSize={25}
        className="flex flex-col gap-10 flex bg-green-200 h-screen p-5 w-full max-w-sm"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-row space-x-4 w-full max-w-sm">
            <Input type="text" placeholder="Brightness" />
            <Button type="submit">Submit</Button>
          </div>
          <div>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row space-x-4">
            <Input type="text" placeholder="Contrast" />
            <Button type="submit">Submit</Button>
          </div>
          <div>
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default App;
