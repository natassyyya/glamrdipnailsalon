import assert from 'node:assert/strict';
import test from 'node:test';

test('landing page renders key sections and booking fields', async () => {
  const {default:worker}=await import('../dist/server/index.js');
  const response=await worker.fetch(new Request('http://localhost/',{headers:{accept:'text/html'}}),{ASSETS:{fetch:async()=>new Response('Not found',{status:404})}},{waitUntil(){},passThroughOnException(){}});
  assert.equal(response.status,200);
  const html=await response.text();
  for(const id of ['home','services','gallery','about','reviews','contact']) assert.match(html,new RegExp(`id="${id}"`));
  for(const field of ['Service','Artist','Date','Time','Name','Phone','Email','Notes']) assert.ok(html.includes(`name="${field}"`),`Missing ${field}`);
  assert.match(html,/Beautiful Nails/);
  assert.doesNotMatch(html,/codex-preview|Building your site|SkeletonPreview/);
});
