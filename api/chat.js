import { generateText } from "ai";

export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
  const prompt=String(req.body?.prompt||"").trim().slice(0,4000);
  if(!prompt) return res.status(400).json({error:"Prompt required"});

  try{
    const { text }=await generateText({
      model: process.env.AI_MODEL || "openai/gpt-5.5",
      system:"You are the AI assistant for Confident Is Enough. Give practical, concise guidance about AI, careers, skills, business ideas, learning and money basics. Never promise income. For financial topics, explain risks and avoid personalized buy/sell instructions. Give clear next steps. End with: Educational information only — not financial advice.",
      prompt,
      maxOutputTokens:900
    });
    return res.status(200).json({answer:format(text),source:"ai"});
  }catch(e){
    return res.status(200).json({answer:fallback(prompt),source:"fallback"});
  }
}
function fallback(q){
 const s=q.toLowerCase();
 if(/business|side income|online|startup|earn|income/.test(s)) return "<h3>Start small and validate</h3><p>Choose one real problem, create the simplest useful offer, test it with real people, and improve it before spending more.</p>";
 if(/job|career|skill|ai/.test(s)) return "<h3>Build one practical skill</h3><p>Choose one skill that matches your target role, practise it through a small project, and use the project to demonstrate what you can do.</p>";
 if(/save|budget|money|salary|expense|invest/.test(s)) return "<h3>Start with the basics</h3><p>Track essential spending, build an emergency buffer, understand risk and fees, and verify current financial rules before making decisions.</p>";
 return "<h3>Start with one clear next step</h3><p>Define the result you want, choose one small action you can complete this week, and measure what happens.</p>";
}
function format(s){return String(s).split(/\n\s*\n/).map(x=>"<p>"+esc(x).replace(/\n/g,"<br>")+"</p>").join("");}
function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}