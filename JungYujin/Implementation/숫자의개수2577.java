package Implementation;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class 숫자의개수2577 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int a = Integer.parseInt(br.readLine());
        int b = Integer.parseInt(br.readLine());
        int c = Integer.parseInt(br.readLine());
        int abc = a*b*c;
        String s = String.valueOf(abc);
        int[] arr = new int[10];
        for(int i=0;i<s.length();i++){
            arr[s.charAt(i)-'0']++;
        }
        for(int i : arr) System.out.println(i);
    }
}
