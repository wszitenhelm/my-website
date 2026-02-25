import solidityVsRustImage from '../assets/twice.jpg';
import web1 from '../assets/web1.jpg';
import freelan from '../assets/freelan.JPG';
import hack1 from '../assets/hack1.jpg';
import second from '../assets/second.JPG';
import jp from '../assets/jp.jpg';
import degree from '../assets/degree.jpg';
import graduate from '../assets/graduate.jpg';
import happy from '../assets/happy.jpg';






export default function Diary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      {/* Page Header */}
      <div className="mx-auto max-w-7xl px-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Developer Diary</h1>
        <p className="text-lg text-gray-700">
          Welcome to my development journal! Here I document my coding journey, learnings, and project insights.
        </p>
      </div>

      {/* 3-Posts Grid Container */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={freelan}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">15th Nov 2022</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
Freelance Life: Building & Winning

                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
Officially calling myself a freelance blockchain engineer now. The hustle is real: client work during the day, hackathon projects at night. Just delivered a ZK-proof prototype for a privacy startup. The freedom to choose projects I'm passionate about is worth the unstable income (for now). Every new contract I write, every architecture I design – I'm building my own reputation, one commit at a time.</p></div>

          </article>

                                <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={second}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">15th Nov 2022</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
Second Hackathon, Second Win: ETHWarsaw Base Bounty
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
Can't believe it – won again! This time at ETHWarsaw with a tutor-student matching dApp on Base. The challenge was creating trustless connections without a central platform. Built the smart contract to handle deposits, matching, and release payments. Watching real people test it and say "this actually makes sense" was the best validation. Two hackathons, two wins. Maybe I'm not just pretending to know this stuff after all.  </p>          </div>
          </article>

                    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={happy}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">3rd July 2025</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
Cross-Chain Breakthrough: EVM ↔ SVM Working!

                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
IT WORKS! After weeks of wrestling with Chainlink CCIP, I finally got a token to move from Ethereum to Solana and back. The moment my test transaction completed and I saw the balance update on the other chain... I actually yelled in my apartment. The architecture is wild – Solidity contracts handling logic on one side, Anchor programs on the other, with CCIP as the messenger. So much debugging, so many failed transactions. But today, it works. 🚀              </p>
            </div>
          </article>
          
          {/* Post 1 */}
          <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={graduate}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">3rd July 2025</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                   Graduation Day!
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                Dear Diary, today I graduated from my Computer Science degree! It feels surreal to have completed this chapter. I feel a bit sad but I know even better days are to come.
              </p>
            </div>
          </article>


                    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={second}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">3rd July 2025</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
The Lonely Grind: Cross-Chain Project Getting Real

                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
Okay, reality check. This cross-chain project is HARD. Working solo means when I hit a wall (like today's CCIP gas estimation issue), there's no one to bounce ideas off. Spent 6 hours debugging why messages weren't being received on Solana. Turns out I was serializing payloads wrong. The learning curve is vertical, but every small victory feels huge. The documentation gaps between EVM and SVM ecosystems are real. Drinking more coffee than water.              </p>
            </div>
          </article>


                              <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={hack1}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">15th Nov 2022</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  My First Hackathon Win: Berlin ZK Hack!
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
Just won my first hackathon at Berlin ZK Hack! 🎉 We built an anonymous form system using zero-knowledge proofs for sensitive topics – think workplace feedback or mental health surveys where privacy is everything. Still buzzing from the energy. Watching our proof-of-concept actually work after 48 hours of non-stop coding... that feeling is unreal. Zero-knowledge felt like magic at first, but now I see how it could change everything about online privacy.</p>           </div>
          </article>

                    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={web1}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">3rd July 2025</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
My First Web3 Conference: NBX Warsaw

                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
Just back from NBX Warsaw – my first proper web3 conference! Presented my cross-chain project to actual builders, not just academics. The feedback was incredible ("Have you considered the MEV implications?" – I hadn't). Met people working on problems I didn't even know existed. The energy here is different from traditional tech conferences. Less corporate, more "let's build the future." Came back with 20 new ideas and a confirmed belief: this is where I belong.

              </p>
            </div>
          </article>


                              <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={solidityVsRustImage}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">3rd July 2025</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
Solidity vs Rust: Building the Same Thing Twice


                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
For my internal project, I built the same e-voting system in both Solidity (Ethereum) and Rust+Anchor (Solana). The experience was enlightening:

Solidity: Felt like home. The EVM model is straightforward – state variables, functions, events. But gas optimization makes my brain hurt sometimes.

Rust + Anchor: Like learning to write with my other hand. The account model, PDA derivation, instruction handlers – completely different mindset. More verbose, but incredibly explicit.

Both have their beauty. Solidity for quick iteration, Rust for when you need that extra control. Now I understand why multi-chain is the future – different tools for different jobs.
              </p>
            </div>
          </article>


                  <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={second}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">20th Dec 2022</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
Choosing My Dissertation: Web3 or Safe Career?
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
My advisor wants me to pick something "established" – cloud computing, ML, something with clear job prospects. But all I can think about is web3. The decentralization models, the new trust paradigms, the technical challenges... It feels like the early internet. Risky? Maybe. But if I'm going to spend 6 months researching something, it should be something I'm actually passionate about. Leaning toward cross-chain communication protocols. Let's do this.     </p>       </div>
          </article>


                  <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={second}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">20th Dec 2022</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Full-stack development feels great!
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                Moved to database migration work - transitioning from Sybase to PostgreSQL using Pentaho. Learning ETL processes and data transformation. Full-stack experience is expanding beyond just React and TypeScript!</p>
           </div>
          </article>


            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={second}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">20th Dec 2022</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  WOHOO all CRUD operations are working!!!
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                I am so happy that all CRUD operations are working! Implemented them with Java Spring Boot. It's been a long journey but I'm proud of what I've accomplished. Thank you to my dear team that helped me on the way!</p>
            </div>
          </article>

                    {/* Post 3 */}
          <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={second}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">20th Dec 2022</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Frontend is nice but...
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
Spent the last weeks polishing UI components. It's satisfying, but now I got assigned backend Jira ticket. I've never done it before but will be fine!! Time to dive deeper into Java and Maven.</p>
            </div>
          </article>

          {/* Post 2 */}
          <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={second}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">15th Nov 2022</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
Imposter Syndrome at JPMorgan

                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
First team meeting today. Everyone's talking about systems I've never heard of, referencing past projects I wasn't part of. Nodding along while frantically Googling under the table. The codebase is millions of lines. Everyone seems so certain. Meanwhile, I'm wondering when they'll realize they hired the wrong person. But my manager said something helpful: "Nobody expects you to know everything. We expect you to learn." Trying to believe that.</p>            </div>
          </article>

                    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={jp}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">15th Nov 2022</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  First Sprint at JPMorgan.
                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
After two-week training it's time to pick up my first Jira ticket. The codebase is massive. Feeling a mix of intimidated and excited to work with React, TypeScript, and Java in a real enterprise environment being surrounded by seniors and VPs from the company. And btw - my manager is amazing!</p>
            </div>
          </article>

                    <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
 <img 
    alt="Solidity vs Rust comparison diagram" 
    src={degree}  // ← Use imported image
    className="h-56 w-full object-cover"
  />
            <div className="p-6">
              <time className="block text-xs text-gray-500">15th Nov 2022</time>
              <a href="#">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
Changing Degrees: From Business to CS

                </h3>
              </a>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
One year into Business Management, and I just can't stop thinking about the programming course I took as an elective. While everyone was discussing marketing strategies, I was staying up late debugging Python scripts. Today I officially submitted my transfer to Computer Science. My parents think I'm crazy ("But business is stable!"). But building things that actually work... that feeling beats any business case study. Here goes everything.  </p>          </div>
          </article>



        </div>
      </div>
    </div>
  );
}