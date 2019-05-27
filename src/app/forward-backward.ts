

    export const backwardForward = (dateObject: any) => {
        const arr1 = [];
// tslint:disable-next-line: forin
        for (const key in dateObject) {
            arr1.push(dateObject[key]);
            }
        const a = arr1.splice(arr1.length - 1, 1);
        arr1.splice(0, 0, a[0]);

// tslint:disable-next-line: forin
let c = 0;
// tslint:disable-next-line: forin
for (const key1 in dateObject) {
    dateObject[key1] = arr1[c];
    c++;
    }
return dateObject;
};
