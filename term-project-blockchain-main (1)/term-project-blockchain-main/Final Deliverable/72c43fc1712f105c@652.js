import define1 from "./450051d7f1174df8@252.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["coin_BinanceCoin.csv",new URL("./files/903ba6344269f7c8a9e63523a96464fb065e1ef92c4e50f3eafc66b6ebf8f508f20688e1fa860b050c3ed900fd3c758c3b1f2c34c21b9f519c116ae38bded9b7",import.meta.url)],["coin_Cardano.csv",new URL("./files/99df37745a0c0d34bb6541bc4f71252917bea0228210502e7c44dd6023e42a1e8e5e90cfe5c792925b655c79a78a9281046e7a72ea6c245ed6b8b6c338987463",import.meta.url)],["coin_Cosmos.csv",new URL("./files/a95670bf8c6a791f7a31cb1f1977875da28c2ae919c32e517f7549fa2e75910dd128c1eebb0ff592d01d05e598e3da1e7851530e8391bf8190d7faa485ffe352",import.meta.url)],["coin_Bitcoin.csv",new URL("./files/0d6abb4197f3579bb8ca6469422337580029dd642c99488ea23a088774d34393b3ff0b001329e7db05e6deb6ff48208c198708daf6f876a55c257ea4a5d79a25",import.meta.url)],["coin_CryptocomCoin.csv",new URL("./files/981d778517fc1cb539b9d8e6c2c0ee734d7706844b3aac0af3838292d734354df9b55abb77666a216059e50f569965c4989cc0bd8cc4404485d56d348cc0fffd",import.meta.url)],["coin_EOS.csv",new URL("./files/e8f5ec7365e8915ce0561fea006a2920932f140fd1106b266cbdf123f638d5523aa2362393df806c244ca0bcad7e362d328e034f9162fc440ad08369cd45f529",import.meta.url)],["coin_Dogecoin.csv",new URL("./files/f03d4f212582ce52824ef5dc747617e249a6dc737b949790c541f4ca1e4eaf1396962cc17876938e78b0fbf766e20b7f0fcd471f0290d93c40cddffb18e2852f",import.meta.url)],["coin_Iota.csv",new URL("./files/36bd6198c07e9cbe7e2adc1862d2873cac8f7a54c074a255b5e858f64ad214d4e079a33bb341796de3a1c6b5a2d6dc9029923c890cd16832c7ee5f8e87eaf140",import.meta.url)],["coin_Litecoin.csv",new URL("./files/800dc1e02aab7906b3486beb2c1d16a2b30b286db4233ede46d0fddc60c2978ec948fb0dc03af035b84cbb730a729ba73cbd3b1ddad63d9fcfc0e1326e176f17",import.meta.url)],["coin_Ethereum.csv",new URL("./files/93bdcbf66d0a6a716fda6275d47b7ad79f271b0c5232b2c96ff03f38c12df49724fa2d9510c43fc4f7a6607b0799fb84454c7b24d71323f43ab977adfc6e39ae",import.meta.url)],["coin_ChainLink.csv",new URL("./files/1dbd1116c007daa235b11972339263225b177fcf3fdefe883ef25e0cdbe5453db2430f64063ff19f59a8122a4db4e5b2ff3254edf7ba76198f4f7cdfe47b662e",import.meta.url)],["coin_Solana.csv",new URL("./files/abffbb1867c35ed12226619b6821737c4142a34f2c522bb549024114372a92bb0de4757ede0088825273a38105e8c8830757de91dd9bdfdae292a92f39cb0150",import.meta.url)],["coin_Monero.csv",new URL("./files/2084a185a64a51d2b0808ee5c98cc4b4cc2b634b5027231ff71a675097954fd589c7521bd5896f7c4e3dff8a554ecd60d450244b35c58fbc1f6ae2eaaa235fe5",import.meta.url)],["coin_Tether.csv",new URL("./files/59b83e9ebed4a4d4e66c4b287055517f09b07935817ac8d0253cc9b8bdc70ac2142461fef456fb2163d5ebb6482090b6d7d52b2e7f95af05c0ec2640418aa8ae",import.meta.url)],["coin_Tron.csv",new URL("./files/c16f614af95a1b44819ce1185f11891293e8007581c898d862cc872247249fc3427a23f49fe2152fb5af80b444a11472f12e9008b22a01a118b5b8dd14bb65a5",import.meta.url)],["coin_Stellar.csv",new URL("./files/f478193e4148e959f1b3ae0a0f5eddf462b9052cf58a64f61712157163f6a477e134c74b99e623b93db70fd0b02b5a5a63b5491206b94b8da594dbe7731bb211",import.meta.url)],["coin_NEM.csv",new URL("./files/7b78bcedadd1b0928d2b426b8d72645556848df87aaae819d0fb2305d4ac0baa2c5c462810027002b58f8425f9d17ab93f01f0b1e58d0a3ac798e79347a56093",import.meta.url)],["coin_Uniswap.csv",new URL("./files/a6a1aab6ae59109bd03a3adc6439d7f38595224ff931b612336828af2a882eb5b53cd559445b47aec970cc03f1edf3db8fd976300e010c92df834f6c314b40e9",import.meta.url)],["coin_XRP.csv",new URL("./files/a4ebaba1da8184c91c7a9d36321dd730758143db81066348f387bdbe79c48c713a56975fdcecf343c70e7f78103e68a2172f58ad77936717b9916d3d7813751c",import.meta.url)],["coin_WrappedBitcoin.csv",new URL("./files/b778d0d1d0870a55d5a8a5ede1de4c8e391fe74e23cf71c72b5136a8b7e8b3a08aa6f8ee4ca25d3008a18e75b5b83a4faa364e38646d0279dcd5ab5170341bf5",import.meta.url)],["coin_USDCoin.csv",new URL("./files/d19d16c80e09ff6dc85357aebe3caa7c12d91ffa665580bb52884abfb0202896347cab2dce0e573e372ad1d259d8eecd2cb618f19ae68bf88fc08700db9ca0b1",import.meta.url)],["coin_Polkadot.csv",new URL("./files/05790513939c6ed06c2b81ffd64be4fa33e73d9f18a2656b1d4672c3255c8844fc262ec9bb1f84686d66402681549782813e687786ed4792d60ba6b3edd1c977",import.meta.url)],["coin_Aave.csv",new URL("./files/0997ff750c4334791ef3184b6de975d4d6bb922da90df44d3453edce995aac7d87a7f4697aeb480bb600c2843dc2cc6994b2008e8077a871ce7d1ac8de0d083e",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Blockchain Size Treemap

Blockchain size change over the last few years`
)});
  main.variable(observer("viewof index")).define("viewof index", ["Scrubber","d3","data","duration"], function(Scrubber,d3,data,duration){return(
Scrubber(d3.range(data.keys.length), {
  delay: duration,
  loop: false,
  format: i => data.keys[i]
})
)});
  main.variable(observer("index")).define("index", ["Generators", "viewof index"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["d3","width","height","data","max","viewof index","formatNumber","DOM","color","duration","parseNumber"], function(d3,width,height,data,max,$0,formatNumber,DOM,color,duration,parseNumber)
{
  const treemap = d3.treemap()
      .tile(d3.treemapResquarify)
      .size([width, height])
      .padding(d => d.height === 1 ? 1 : 0)
      .round(true);

  // Compute the structure using the average value.
  const root = treemap(d3.hierarchy(data.group)
      .sum(d => Array.isArray(d.values) ? d3.sum(d.values) : 0)
      .sort((a, b) => b.value - a.value));

  const svg = d3.create("svg")
      .attr("viewBox", `0 -20 ${width} ${height + 20}`)
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .style("overflow", "visible");

  const box = svg.append("g")
    .selectAll("g")
    .data(data.keys.map((key, i) => {
      const value = root.sum(d => d.values[i]).value;
      return {key, value, i, k: Math.sqrt(value / max)};
    }).reverse())
    .join("g")
      .attr("transform", ({k}) => `translate(${(1 - k) / 2 * width},${(1 - k) / 2 * height})`)
      .attr("opacity", ({i}) => i >= $0.value ? 1 : 0)
      .call(g => g.append("text")
          .attr("y", -6)
          .attr("fill", "#777")
        .selectAll("tspan")
        .data(({key, value}) => [key, ` ${formatNumber(value)}`])
        .join("tspan")
          .attr("font-weight", (d, i) => i === 0 ? "bold" : null)
          .text(d => d))
      .call(g => g.append("rect")
          .attr("fill", "none")
          .attr("stroke", "#ccc")
          .attr("width", ({k}) => k * width)
          .attr("height", ({k}) => k * height));

  const leaf = svg.append("g")
    .selectAll("g")
    .data(layout($0.value))
    .join("g")
      .attr("transform", d => `translate(${d.x0},${d.y0})`);

  leaf.append("rect")
      .attr("id", d => (d.leafUid = DOM.uid("leaf")).id)
      .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data[0]); })
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0);

  leaf.append("clipPath")
      .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
    .append("use")
      .attr("xlink:href", d => d.leafUid.href);

  leaf.append("text")
      .attr("clip-path", d => d.clipUid)
    .selectAll("tspan")
    .data(d => [d.data.name, formatNumber(d.value)])
    .join("tspan")
      .attr("x", 3)
      .attr("y", (d, i, nodes) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
      .attr("fill-opacity", (d, i, nodes) => i === nodes.length - 1 ? 0.7 : null)
      .text(d => d);

  leaf.append("title")
      .text(d => d.data.name);

  function layout(index) {
    const k = Math.sqrt(root.sum(d => d.values[index]).value / max);
    const x = (1 - k) / 2 * width;
    const y = (1 - k) / 2 * height;
    return treemap.size([width * k, height * k])(root)
      .each(d => (d.x0 += x, d.x1 += x, d.y0 += y, d.y1 += y))
      .leaves();
  }

  return Object.assign(svg.node(), {
    update(index) {
      box.transition()
          .duration(duration)
          .attr("opacity", ({i}) => i >= index ? 1 : 0);

      leaf.data(layout(index)).transition()
          .duration(duration)
          .ease(d3.easeLinear)
          .attr("transform", d => `translate(${d.x0},${d.y0})`)
          .call(leaf => leaf.select("rect")
              .attr("width", d => d.x1 - d.x0)
              .attr("height", d => d.y1 - d.y0))
          .call(leaf => leaf.select("text tspan:last-child")
              .tween("text", function(d) {
                const i = d3.interpolate(parseNumber(this.textContent), d.value);
                return function(t) { this.textContent = formatNumber(i(t)); };
              }));
    }
  });
}
);
  main.variable(observer("update")).define("update", ["chart","index"], function(chart,index){return(
chart.update(index)
)});
  main.variable(observer("duration")).define("duration", function(){return(
2500
)});
  main.variable(observer("parseNumber")).define("parseNumber", function(){return(
string => +string.replace(/,/g, "")
)});
  main.variable(observer("formatNumber")).define("formatNumber", ["d3"], function(d3){return(
d3.format(",d")
)});
  main.variable(observer("sums")).define("sums", ["data","d3"], function(data,d3){return(
data.keys.map((d, i) => d3.hierarchy(data.group).sum(d => d.values[i]).value)
)});
  main.variable(observer("max")).define("max", ["d3","sums"], function(d3,sums){return(
d3.max(sums)
)});
  main.variable(observer("color")).define("color", ["d3","data"], function(d3,data){return(
d3.scaleOrdinal(data.group.keys(), d3.schemeCategory10.map(d => d3.interpolateRgb(d, "white")(0.5)))
)});
  main.variable(observer("data")).define("data", ["FileAttachment","d3"], async function(FileAttachment,d3)
{
  const [d_Aave, d_BinanceCoin, d_Bitcoin, d_Cardano, d_ChainLink, d_CryptocomCoin, d_CosmosCoin, d_Dogecoin, d_EOS, d_Ethereum, d_Iota, d_Litecoin, d_Monero, d_NEM, d_Polkadot, d_Solana, d_Stellar, d_Tether, d_Tron, d_Uniswap, d_USDCoin, d_WrappedBitcoin, d_XRP] = await Promise.all([
    FileAttachment("coin_Aave.csv").text(),
    FileAttachment("coin_BinanceCoin.csv").text(),
    FileAttachment("coin_Bitcoin.csv").text(),
    FileAttachment("coin_Cardano.csv").text(),
    FileAttachment("coin_ChainLink.csv").text(),
    FileAttachment("coin_Cosmos.csv").text(),
    FileAttachment("coin_CryptocomCoin.csv").text(),
    FileAttachment("coin_Dogecoin.csv").text(),
    FileAttachment("coin_EOS.csv").text(),
    FileAttachment("coin_Ethereum.csv").text(),
    FileAttachment("coin_Iota.csv").text(),
    FileAttachment("coin_Litecoin.csv").text(),
    FileAttachment("coin_Monero.csv").text(),
    FileAttachment("coin_NEM.csv").text(),
    FileAttachment("coin_Polkadot.csv").text(),
    FileAttachment("coin_Solana.csv").text(),
    FileAttachment("coin_Stellar.csv").text(),
    FileAttachment("coin_Tether.csv").text(),
    FileAttachment("coin_Tron.csv").text(),
    FileAttachment("coin_Uniswap.csv").text(),
    FileAttachment("coin_USDCoin.csv").text(),
    FileAttachment("coin_WrappedBitcoin.csv").text(),
    FileAttachment("coin_XRP.csv").text(),
  ]).then(([d_Aave, d_BinanceCoin, d_Bitcoin, d_Cardano, d_ChainLink, d_CryptocomCoin, d_CosmosCoin, d_Dogecoin, d_EOS, d_Ethereum, d_Iota, d_Litecoin, d_Monero, d_NEM, d_Polkadot, d_Solana, d_Stellar, d_Tether, d_Tron, d_Uniswap, d_USDCoin, d_WrappedBitcoin, d_XRP]) => [
    d3.csvParse(d_Aave),
    d3.csvParse(d_BinanceCoin),
    d3.csvParse(d_Bitcoin),
     d3.csvParse(d_Cardano),
     d3.csvParse(d_ChainLink),
     d3.csvParse(d_CryptocomCoin),
     d3.csvParse(d_CosmosCoin),
     d3.csvParse(d_Dogecoin),
     d3.csvParse(d_EOS),
     d3.csvParse(d_Ethereum),
     d3.csvParse(d_Iota),
     d3.csvParse(d_Litecoin),
     d3.csvParse(d_Monero),
     d3.csvParse(d_NEM),
     d3.csvParse( d_Polkadot),
     d3.csvParse(d_Solana),
     d3.csvParse( d_Stellar),
     d3.csvParse(d_Tether),
     d3.csvParse(d_Tron),
     d3.csvParse(d_Uniswap),
     d3.csvParse(d_USDCoin),
     d3.csvParse(d_WrappedBitcoin),
    d3.csvParse(d_XRP),
     ]);
  
  
  const keys = d_Bitcoin.map(d => d.Date);
  // return keys;
  
  const map_BinanceCoin = new Map(d_BinanceCoin.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Aave = new Map(d_Aave.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
   const map_Cardano = new Map(d_Cardano.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
   const map_ChainLink = new Map(d_ChainLink.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
   const map_CryptocomCoin = new Map(d_CryptocomCoin.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
   const map_CosmosCoin = new Map(d_CosmosCoin.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Dogecoin = new Map(d_Dogecoin.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_EOS = new Map(d_EOS.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Ethereum = new Map(d_Ethereum.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Iota = new Map(d_Iota.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Litecoin = new Map(d_Litecoin.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Monero = new Map(d_Monero.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_NEM = new Map(d_NEM.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Polkadot = new Map(d_Polkadot.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Solana = new Map(d_Solana.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Stellar = new Map(d_Stellar.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Tether = new Map(d_Tether.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Tron = new Map(d_Tron.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_Uniswap = new Map(d_Uniswap.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_USDCoin = new Map(d_USDCoin.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
const map_WrappedBitcoin = new Map(d_WrappedBitcoin.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  const map_XRP = new Map(d_XRP.map(d => [d.Date, d["Marketcap"], d["Symbol"]]));
  
 
  const dd_Bitcoin = d_Bitcoin.map(d => parseInt(d["Marketcap"]));;
  
  const dd_BinanceCoin = d_Bitcoin.map(d => {
    var temp;
    if (map_BinanceCoin.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_BinanceCoin.get(d.Date));
    }
    return temp;
  });
  
  const dd_Aave = d_Bitcoin.map(d => {
    var temp;
    if (map_Aave.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Aave.get(d.Date));
    }
    return temp;
  });
  const dd_Cardano = d_Bitcoin.map(d => {
    var temp;
    if (map_Cardano.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Cardano.get(d.Date));
    }
    return temp;
  });
  const dd_ChainLink = d_Bitcoin.map(d => {
    var temp;
    if (map_ChainLink.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_ChainLink.get(d.Date));
    }
    return temp;
  });
   const dd_CryptocomCoin = d_Bitcoin.map(d => {
    var temp;
    if (map_CryptocomCoin.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_CryptocomCoin.get(d.Date));
    }
    return temp;
  });
     const dd_CosmosCoin = d_Bitcoin.map(d => {
    var temp;
    if (map_CosmosCoin.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_CosmosCoin.get(d.Date));
    }
    return temp;
  });
   const dd_Dogecoin = d_Bitcoin.map(d => {
    var temp;
    if (map_Dogecoin.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Dogecoin.get(d.Date));
    }
    return temp;
  });
   const dd_EOS = d_Bitcoin.map(d => {
    var temp;
    if (map_EOS.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_EOS.get(d.Date));
    }
    return temp;
  });
   const dd_Ethereum = d_Bitcoin.map(d => {
    var temp;
    if (map_Ethereum.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Ethereum.get(d.Date));
    }
    return temp;
  });
   const dd_Iota = d_Bitcoin.map(d => {
    var temp;
    if (map_Iota.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Iota.get(d.Date));
    }
    return temp;
  });
   const dd_Litecoin = d_Bitcoin.map(d => {
    var temp;
    if (map_Litecoin.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Litecoin.get(d.Date));
    }
    return temp;
  });
   const dd_Monero = d_Bitcoin.map(d => {
    var temp;
    if (map_Monero.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Monero.get(d.Date));
    }
    return temp;
  });
   const dd_NEM = d_Bitcoin.map(d => {
    var temp;
    if (map_NEM.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_NEM.get(d.Date));
    }
    return temp;
  });
   const dd_Polkadot = d_Bitcoin.map(d => {
    var temp;
    if (map_Polkadot.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Polkadot.get(d.Date));
    }
    return temp;
  });
   const dd_Solana = d_Bitcoin.map(d => {
    var temp;
    if (map_Solana.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Solana.get(d.Date));
    }
    return temp;
  });
   const dd_Stellar = d_Bitcoin.map(d => {
    var temp;
    if (map_Stellar.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Stellar.get(d.Date));
    }
    return temp;
  });
   const dd_Tether = d_Bitcoin.map(d => {
    var temp;
    if (map_Tether.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Tether.get(d.Date));
    }
    return temp;
  });
  const dd_Tron = d_Bitcoin.map(d => {
    var temp;
    if (map_Tron.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Tron.get(d.Date));
    }
    return temp;
  });
  const dd_Uniswap = d_Bitcoin.map(d => {
    var temp;
    if (map_Uniswap.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_Uniswap.get(d.Date));
    }
    return temp;
  });
  const dd_USDCoin = d_Bitcoin.map(d => {
    var temp;
    if (map_USDCoin.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_USDCoin.get(d.Date));
    }
    return temp;
  });
  const dd_WrappedBitcoin = d_Bitcoin.map(d => {
    var temp;
    if (map_WrappedBitcoin.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_WrappedBitcoin.get(d.Date));
    }
    return temp;
  });
  const dd_XRP = d_Bitcoin.map(d => {
    var temp;
    if (map_XRP.get(d.Date) == NaN) {
      temp = 0;
    } else {
      temp = parseInt(map_XRP.get(d.Date));
    }
    return temp;
  });
  const all_data_arr = [
    {"name":"Aave", "values":dd_Aave, "group":"group Ethereum Tokens"},
    {"name":"BinanceCoin", "values":dd_BinanceCoin, "group":"group Ethereum Tokens"},
    {"name":"Bitcoin", "values":dd_Bitcoin,"group":"group Bitcoin"},
    {"name":"Cardano", "values":dd_Cardano, "group":"group Other"},
    {"name":"ChainLink", "values":dd_ChainLink, "group":"group Ethereum Tokens"},
    {"name":"CryptocomCoin", "values":dd_CryptocomCoin, "group":"group Ethereum Tokens"},
    {"name":"CosmosCoin", "values":dd_CosmosCoin, "group":"group Other"},
    {"name":"Dogecoin", "values":dd_Dogecoin, "group":"group Other"},
    {"name":"EOS", "values":dd_EOS, "group":"group Other"},
    {"name":"Ethereum", "values":dd_Ethereum, "group":"group Other"},
    {"name":"Iota", "values":dd_Iota, "group":"group Other"},
    {"name":"Litecoin", "values":dd_Litecoin, "group":"group Other"},
    {"name":"Monero", "values":dd_Monero, "group":"group Other"},
    {"name":"NEM", "values":dd_NEM, "group":"group Other"},
    {"name":"Polkadot", "values":dd_Polkadot, "group":"group Other"},
    {"name":"Solana", "values":dd_Solana, "group":"group Other"},
    {"name":"Stellar", "values":dd_Stellar, "group":"group Other"},
    {"name":"Tether", "values":dd_Tether, "group":"group Stablecoins"},
    {"name":"Tron", "values":dd_Tron, "group":"group Other"},
    {"name":"Uniswap", "values":dd_Uniswap, "group":"group Ethereum Tokens"},
    {"name":"USDCoin", "values":dd_USDCoin, "group":"group Stablecoins"},
    {"name":"WrappedBitcoin", "values":dd_WrappedBitcoin, "group":"group Ethereum Tokens"},
    {"name":"XRP", "values":dd_XRP, "group":"group Other"},
    
  ];
  const data_group = d3.group(all_data_arr, d=> d.name, d=>d.Symbol)
  
  // return data_group;
  return {keys, group: data_group};
}
);
  main.variable(observer("width")).define("width", function(){return(
954
)});
  main.variable(observer("height")).define("height", ["width"], function(width){return(
width
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  const child1 = runtime.module(define1);
  main.import("Scrubber", child1);
  return main;
}
