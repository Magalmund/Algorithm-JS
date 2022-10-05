//---------------Graph(Dijkstra algorithm)----------------

const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

// function shortPath(graph, start, end) {
// 	const costs = {}; //Таблица где храняться кратчайшие пути
// 	const processed = []; //Массив с проверенными узлами
// 	let neighbors = {} //Соседние вершны рассматриваемого узла
//
// 	Object.keys(graph).forEach(node => {
// 		if(start !== node) {
// 			let value = graph[start][node];
// 			costs[node] = value || 10000
// 		}
// 	})
//
// 	let node = findNodeLowestCost(costs, processed)
//
// 	while(node){
// 		let cost = costs[node];
// 		neighbors = graph[node];
//
// 		Object.keys(neighbors).forEach(neighbor => {
// 			let newCost = cost + neighbors[neighbor];
// 			if(newCost < costs[neighbor]){
// 				costs[neighbor] = newCost;
// 			}
// 		})
// 		processed.push(node);
// 		node = findNodeLowestCost(costs, processed)
// 	}
// 	return costs
// }
//
// function findNodeLowestCost(costs, processed) {
// 	let lowestCost = 10000;
// 	let lowestNode;
//
// 	Object.keys(costs).forEach(node => {
// 		let cost = costs[node]
// 		if(cost < lowestCost && !processed.includes(node)){
// 			lowestCost = cost;
// 			lowestNode = node
// 		}
// 	})
// 	return lowestNode
// }





console.log(shortPath(graph, 'a', 'g' ));
//---------------Graph(Dijkstra algorithm)-End---------------