package Math;

import java.util.Scanner;

public class 날짜계산1476 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int e = sc.nextInt();
        int s = sc.nextInt();
        int m = sc.nextInt();

        int[] arr = {1,1,1};
        int year = 1;
        while(true) {
            if(arr[0]==e && arr[1]==s && arr[2]==m) {
                System.out.println(year);
                break;
            }
            arr[0]++; if(arr[0]>15) arr[0]=1;
            arr[1]++; if(arr[1]>28) arr[1]=1;
            arr[2]++; if(arr[2]>19) arr[2]=1;
            year++;
        }
    }
}
