arr = [1,2,3,4,5]
targate = 5
minimumDiff = 2


for (i = 0; i < arr.length; i++){
    console.log(arr[i]);
    for (j=0; j < arr.length; j++){
        console.log(arr[j])
        var tempDiff=Math.abs(arr[i]+arr[j]-targate);
 
            if(tempDiff< minimumDiff)
            {
                pair1stIndex=i;
                pair2ndIndex=j;
                minimumDiff=tempDiff;
            }
    }
}
console.log(" The pair whose sum is closest to X using brute force method: "+arr[pair1stIndex]+" "+ arr[pair2ndIndex]);
















// public static void findPairWithClosestToXBruteForce(int arr[],int X)
// {
//     if(arr.length<2)
//         return;
//     // Suppose 1st two element has minimum diff with X
//     int minimumDiff=Math.abs(arr[0]+arr[1]-X);
//     int pair1stIndex=0;
//     int pair2ndIndex=1;
//     for (int i = 0; i < arr.length; i++) {
//         for (int j = i+1; j < arr.length; j++) {
//             int tempDiff=Math.abs(arr[i]+arr[j]-X);
 
//             if(tempDiff< minimumDiff)
//             {
//                 pair1stIndex=i;
//                 pair2ndIndex=j;
//                 minimumDiff=tempDiff;
//             }
//         }
//     }
//     System.out.println(" The pair whose sum is closest to X using brute force method: "+arr[pair1stIndex]+" "+ arr[pair2ndIndex]);
// }