import { generateText } from "ai";

export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
  const prompt=String(req.body?.prompt||"").trim().slice(0,4000);
  if(!prompt) return res.status(400).json({error:"Prompt required"});

  try{
    const { text } = await generateText({
      model: process.env.AI_MODEL || "openai/gpt-5.6-luna",
      temperature: 0.4,
      system: "You are Trending Money, an educational assistant about saving, investing, money and small business. Be practical and concise. Never promise profits. For investing, explain risk and avoid personalized buy/sell instructions. Tailor business ideas to budget and skills when provided. End with: Educational information only — not financial advice.",
      prompt
    });

    return res.status(200).json({answer:format(text),source:"ai"});
  }catch(e){
    return res.status(200).json({
      answer:fallback(prompt),
      source:"fallback"
    });
  }
}

function fallback(q){
  const s=q.toLowerCase();
  let body;
  if(/invest|stock|mutual|sip|share|crypto/.test(s)){
    body="<strong>Start with the basics</strong><br><br>Learn the difference between saving and investing, understand risk, diversify instead of putting all your money into one asset, and invest only money you can keep invested for the long term.";
  }else if(/business|side income|online|startup|earn|income/.test(s)){
    body="<strong>Start small and validate first</strong><br><br>Choose one problem people will pay to solve. Test the idea with a small budget, get your first customer, then improve the offer before spending more.";
  }else if(/save|budget|money|salary|expense/.test(s)){
    body="<strong>Use a simple money system</strong><br><br>Track essential expenses first, set an automatic savings amount after payday, keep an emergency buffer, and avoid increasing spending just because income increases.";
  }else{
    body="<strong>Here is a practical starting point</strong><br><br>Break your money goal into one small action you can take this week. Check the cost, risk and expected benefit before committing money.";
  }
  return body+"<p><em>Educational information only — not financial advice.</em></p>";
}

function format(s){
  return String(s).split(/\n\s*\n/).map(x=>"<p>"+esc(x).replace(/\n/g,"<br>")+"</p>").join("");
}

function esc(s){
  return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
}