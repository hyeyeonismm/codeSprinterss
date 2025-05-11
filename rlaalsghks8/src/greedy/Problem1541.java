package greedy;

import java.util.Scanner;

public class Problem1541 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        String [] numAndOp = input.split("-");

        int sum = 0;


        for(int i=0; i< numAndOp.length; i++){
            int inCul = 0;
            String [] inParenthesis = numAndOp[i].split("\\+");


            for(String num : inParenthesis){
                inCul +=Integer.parseInt(num);
            }
            if(i==0){
                sum += inCul;
            }else{
                sum -= inCul;
            }


        }
        System.out.println(sum);
        scanner.close();

    }
}
