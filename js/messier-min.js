
const pnode = document.getElementById('messier-container');
const tbl = document.createElement('table');
tbl.id = 'messier';
tbl.style.border = '1px solid black';
pnode.appendChild(tbl);

const levels = ['Very Easy', 'Easy', 
                'Moderate', 'Hard',
               'Very Hard'];


const sortObjects = (a, b) => {

    const amag = a.magnitude,
        bmag = b.magnitude;

    if (amag > bmag) {
        return 1;
    } else if (bmag > amag) {
        return -1;
    }
    return 0;
};


for (let i =0; i < 8; i++) {
    
    const tr = document.createElement('tr');
    tbl.appendChild(tr);
    
   for (let j = 0; j < 18; j++) {
        
        const td = document.createElement('td');
         td.style.fontSize = '1.5em';
         td.style.padding = '1px';
         td.style.border = '1px solid black';
         td.id = `cell_${i}_${j}`;
         td.innerHTML = '&nbsp;';
         tr.appendChild(td);
       
   } 
    
}

const groups = {};

fetch('/data/sky-objects.json').
    then(async response  => {

        const json = await response.json();

        for (let i =0, end = levels.length; i<end;i++) {
            const c = levels[i];

            const flevel = json.filter(item => {
                
                 return item.difficultlyLevel === c;
    
            });
            flevel.sort(sortObjects);
            groups[c] = flevel;
        }


        let startCol = 0,
            row = 0;

        const TOTAL_ROWS = 8;
        levels.forEach(lvl => {

            const group = groups[lvl];
            const size = group.length;
            const columns = Math.ceil(size / TOTAL_ROWS);
            const fsize = size % TOTAL_ROWS;

            let resetIt =0;
            while ((fsize + row) % TOTAL_ROWS !== 0) {
                row++;
                resetIt++;
                
            }
            let i = 0;
            let col = startCol;
            while (i < size) {
                const cell = document.getElementById(`cell_${row}_${col}`);
                cell.innerHTML = group[i].object;
                console.log(resetIt,i,size, columns, row, col, group[i].object, typeof cell);
                
                col++;
                const diff = col - startCol;
                if (diff > 0 && resetIt > 0) {
                    row = 0;
                    resetIt = 0;
                } 
                if (diff >= columns) {
                    col = startCol;
                    row++;
                }
                i++;
                
            }
            
            startCol += 1 + columns;
            row = 0;
                
        });
        
        

        console.log(groups);
        
    });
