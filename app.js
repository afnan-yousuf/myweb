'use strict';
// CONFIGURATION: Replace the WhatsApp number with your real international number (digits only).
// Example for Pakistan: 923001234567
const STORE = {whatsapp: '923001234567', email: 'sales@abctraders.example'};
const ASSETS = {
  laptop:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85',
  desktop:'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=1000&q=85',
  accessories:'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=85',
  laptop2:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85'
};
// DEMO PRODUCTS ONLY. Replace with your actual inventory, specs, prices and images.
const products = [
 {id:1,name:'HP ProBook Business Laptop',category:'laptops',condition:'used',specs:'Core i5 · 8GB RAM · 256GB SSD',image:ASSETS.laptop},
 {id:2,name:'Dell Latitude Laptop',category:'laptops',condition:'used',specs:'Core i7 · 16GB RAM · 512GB SSD',image:ASSETS.laptop2},
 {id:3,name:'Desktop Workstation',category:'desktops',condition:'used',specs:'Core i5 · 8GB RAM · 500GB SSD',image:ASSETS.desktop},
 {id:4,name:'Wireless Keyboard & Mouse',category:'accessories',condition:'new',specs:'USB Wireless Combo',image:ASSETS.accessories},
 {id:5,name:'Everyday Laptop',category:'laptops',condition:'new',specs:'8GB RAM · 256GB SSD',image:ASSETS.laptop2},
 {id:6,name:'Office Desktop PC',category:'desktops',condition:'new',specs:'16GB RAM · 512GB SSD',image:ASSETS.desktop},
 {id:7,name:'Wireless Computer Mouse',category:'accessories',condition:'new',specs:'Ergonomic · 2.4GHz Wireless',image:ASSETS.accessories},
 {id:8,name:'Student Laptop',category:'laptops',condition:'used',specs:'Core i5 · 8GB RAM · 256GB SSD',image:ASSETS.laptop}
];
function whatsappUrl(message){return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;}
function setupWhatsapp(){document.querySelectorAll('[data-whatsapp]').forEach(a=>{const msg=a.dataset.whatsapp||'Hello ABC Traders, I would like to know more about your products.';a.href=whatsappUrl(msg);a.target='_blank';a.rel='noopener noreferrer';});}
function productCard(p){const article=document.createElement('article');article.className='product-card';const img=document.createElement('img');img.src=p.image;img.alt=p.name;img.loading='lazy';img.onerror=()=>{img.onerror=null;img.src='assets/product-placeholder.svg';};const body=document.createElement('div');body.className='card-body';const badge=document.createElement('span');badge.className=`badge ${p.condition}`;badge.textContent=p.condition==='new'?'New':'Used';const name=document.createElement('h3');name.textContent=p.name;const specs=document.createElement('p');specs.textContent=p.specs;const link=document.createElement('a');link.className='btn btn-outline';link.textContent='Ask on WhatsApp ↗';link.href=whatsappUrl(`Hello ABC Traders, I'm interested in ${p.name} (${p.specs}). Please confirm the current price and availability.`);link.target='_blank';link.rel='noopener noreferrer';body.append(badge,name,specs,link);article.append(img,body);return article;}
function renderInto(node,items){if(!node)return;node.replaceChildren(...items.map(productCard));}
function setupCatalog(){const container=document.querySelector('#catalog-products');if(!container)return;const category=document.querySelector('#category-filter');const condition=document.querySelector('#condition-filter');const search=document.querySelector('#product-search');const count=document.querySelector('#product-count');const empty=document.querySelector('#empty-state');const params=new URLSearchParams(location.search);if(['laptops','desktops','accessories'].includes(params.get('category')))category.value=params.get('category');function update(){const q=search.value.trim().toLowerCase();const filtered=products.filter(p=>(category.value==='all'||p.category===category.value)&&(condition.value==='all'||p.condition===condition.value)&&(`${p.name} ${p.specs} ${p.category}`).toLowerCase().includes(q));renderInto(container,filtered);count.textContent=`Showing ${filtered.length} of ${products.length} products`;empty.classList.toggle('hide',filtered.length>0);}for(const item of [category,condition,search])item.addEventListener('input',update);update();}
function setupFeatured(){renderInto(document.querySelector('#featured-products'),products.slice(0,4));}
function setupContact(){const form=document.querySelector('#contact-form');if(!form)return;form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const name=String(data.get('name')||'').trim();const email=String(data.get('email')||'').trim();const subject=String(data.get('subject')||'Product enquiry').trim();const message=String(data.get('message')||'').trim();if(!name||!email||!message)return;const body=`Name: ${name}\nEmail: ${email}\n\n${message}`;const mailto=`mailto:${STORE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;window.location.href=mailto;document.querySelector('#form-status').textContent='Your email app should open with the message ready to send. If it does not, please contact us via WhatsApp.';});}
function setupNav(){const button=document.querySelector('#nav-toggle');const nav=document.querySelector('#nav-links');if(!button||!nav)return;button.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(isOpen));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');}));}
document.addEventListener('DOMContentLoaded',()=>{setupNav();setupWhatsapp();setupFeatured();setupCatalog();setupContact();});
