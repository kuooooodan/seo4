const fs = require('fs');
const path = require('path');

const categories = {
    casual: { name: '休閒服飾', products: [
        { id: 1, name: '經典白亞麻襯衫', price: '2,800', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800' },
        { id: 2, name: '修身卡其短褲', price: '1,800', img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800' },
        { id: 3, name: '海軍藍 Polo 衫', price: '2,200', img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800' },
        { id: 4, name: '簡約設計 T-Shirt', price: '1,200', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800' }
    ]},
    formal: { name: '正式服飾', products: [
        { id: 5, name: '午夜藍手工西裝', price: '32,000', img: 'https://images.unsplash.com/photo-1594932224828-b4b05a83296d?auto=format&fit=crop&q=80&w=800' },
        { id: 6, name: '真絲變形蟲領帶', price: '3,500', img: 'https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?auto=format&fit=crop&q=80&w=800' },
        { id: 7, name: '經典黑色燕尾服', price: '45,000', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800' },
        { id: 8, name: '手工牛皮牛津鞋', price: '12,000', img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800' }
    ]},
    jewelry: { name: '飾品', products: [
        { id: 9, name: '純銀印章戒指', price: '4,800', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800' },
        { id: 10, name: '編織皮革手環', price: '2,500', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800' }
    ]},
    accessories: { name: '配件', products: [
        { id: 11, name: '頂級牛皮皮帶', price: '3,800', img: 'https://images.unsplash.com/photo-1624222247344-550fb805831f?auto=format&fit=crop&q=80&w=800' },
        { id: 12, name: '經典飛官太陽眼鏡', price: '5,500', img: 'https://images.unsplash.com/photo-1511499767390-903390e62bc0?auto=format&fit=crop&q=80&w=800' },
        { id: 13, name: 'Saffiano 皮革皮夾', price: '6,800', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800' },
        { id: 14, name: '羊毛氈費多拉帽', price: '4,200', img: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80&w=800' }
    ]},
    others: { name: '其它類', products: [
        { id: 15, name: '防水長版風衣', price: '8,500', img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800' },
        { id: 16, name: '週末帆布旅行袋', price: '7,200', img: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800' }
    ]}
};

const nav = `
    <nav>
        <div class="logo"><a href="index.html">ELYSIAN</a></div>
        <div class="nav-links">
            <a href="index.html">首頁</a>
            <a href="about.html">公司簡介</a>
            <a href="casual.html">休閒服飾</a>
            <a href="formal.html">正式服飾</a>
            <a href="jewelry.html">飾品</a>
            <a href="accessories.html">配件</a>
            <a href="others.html">其它類</a>
            <a href="contact.html">聯絡我們</a>
        </div>
    </nav>
`;

const footer = `
    <footer>
        <div class="footer-logo">ELYSIAN</div>
        <p>© 2026 Elysian Menswear. All Rights Reserved.</p>
        <div class="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
        </div>
    </footer>
`;

const head = (title) => `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Elysian Menswear</title>
    <link rel="stylesheet" href="css/style.css">
`;

const revealScript = `
    <script>
        const reveals = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, { threshold: 0.1 });
        reveals.forEach(reveal => observer.observe(reveal));
    </script>
`;

// Generate Category Pages
for (const [key, category] of Object.entries(categories)) {
    const html = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>${head(category.name)}</head>
<body>
    ${nav}
    <div class="container" style="margin-top: 150px;">
        <h1 class="section-title reveal">${category.name}</h1>
        <div class="product-grid">
            ${category.products.map(p => `
                <div class="product-card reveal">
                    <a href="product-${p.id}.html">
                        <img src="${p.img}" alt="${p.name}" class="product-image">
                        <div class="product-info">
                            <span class="product-category">${category.name}</span>
                            <h3 class="product-name">${p.name}</h3>
                            <p class="product-price">TWD ${p.price}</p>
                        </div>
                    </a>
                </div>
            `).join('')}
        </div>
    </div>
    ${footer}
    ${revealScript}
</body>
</html>
    `;
    fs.writeFileSync(`${key}.html`, html);
}

// Generate Product Detail Pages
for (const category of Object.values(categories)) {
    for (const p of category.products) {
        const html = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>${head(p.name)}</head>
<body>
    ${nav}
    <div class="container" style="margin-top: 150px; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;">
        <div class="product-gallery reveal">
            <img src="${p.img}" alt="${p.name}" style="width: 100%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
        </div>
        <div class="product-details reveal">
            <span class="product-category" style="font-size: 1rem;">${category.name}</span>
            <h1 style="font-size: 3rem; margin: 20px 0;">${p.name}</h1>
            <p class="product-price" style="font-size: 1.5rem; color: var(--accent-color); margin-bottom: 30px;">TWD ${p.price}</p>
            <p style="color: var(--text-secondary); margin-bottom: 40px;">
                這款精選產品體現了 Elysian Menswear 對品質與設計的極致追求。採用頂級面料，專為追求卓越品味的紳士打造。不論是細節處理還是穿著感，都展現出與眾不同的質感。
            </p>
            <button class="btn" style="width: 100%;">加入購物車</button>
            <div style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
                <p style="font-size: 0.9rem; color: var(--text-secondary);">✓ 全球免運費</p>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">✓ 30 天無理由退貨</p>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">✓ 專屬禮品包裝</p>
            </div>
        </div>
    </div>
    ${footer}
    ${revealScript}
</body>
</html>
        `;
        fs.writeFileSync(`product-${p.id}.html`, html);
    }
}

// Generate About and Contact
const aboutHtml = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>${head('公司簡介')}</head>
<body>
    ${nav}
    <div class="container" style="margin-top: 150px; max-width: 800px; text-align: center;">
        <h1 class="section-title reveal">關於 ELYSIAN</h1>
        <p class="reveal" style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 40px;">
            Elysian Menswear 創立於 2026 年，致力於為現代紳士提供超越時空的服裝體驗。我們相信，服裝不僅是身份的象徵，更是內在品味的延伸。
        </p>
        <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1200" alt="Atelier" style="width: 100%; border-radius: 8px; margin-bottom: 40px;" class="reveal">
        <h2 class="reveal" style="margin-bottom: 20px;">我們的哲學</h2>
        <p class="reveal" style="color: var(--text-secondary); margin-bottom: 60px;">
            每一件服飾都經過匠心打磨，從布料選取到最終縫紉，我們堅持「極致細節，純粹美學」。
        </p>
    </div>
    ${footer}
    ${revealScript}
</body>
</html>
`;
fs.writeFileSync('about.html', aboutHtml);

const contactHtml = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>${head('聯絡我們')}</head>
<body>
    ${nav}
    <div class="container" style="margin-top: 150px;">
        <h1 class="section-title reveal">聯絡我們</h1>
        <div class="contact-container reveal">
            <div>
                <h2>預約諮詢</h2>
                <p style="color: var(--text-secondary); margin-bottom: 40px;">歡迎蒞臨我們的旗艦店，或透過下方表單與我們聯繫。</p>
                <p>地址：台北市信義區精品路 88 號</p>
                <p>電話：+886 2 2345 6789</p>
                <p>電郵：concierge@elysian.com</p>
            </div>
            <form class="contact-form">
                <input type="text" placeholder="姓名" required>
                <input type="email" placeholder="電子郵件" required>
                <textarea rows="5" placeholder="您的訊息"></textarea>
                <button type="submit" class="btn">傳送訊息</button>
            </form>
        </div>
    </div>
    ${footer}
    ${revealScript}
</body>
</html>
`;
fs.writeFileSync('contact.html', contactHtml);
