package Implementation;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class 비밀번호발음하기4659 {
    public static void main(String[] args) throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String pw = br.readLine();

        Set<Character> vowel = new HashSet<>(Arrays.asList('a','e','i','o','u'));
        Set<Character> consonant = new HashSet<>(Arrays.asList('b','c','d','f','g','h','j','k','l','m','n','p'
        ,'q','r','x','t','v','w','x','y','z'));

        boolean check1 = false;
        boolean check2 = true;
        boolean check3 = true;

        while(!pw.equals("end")){
            for(int i=0;i<pw.length();i++){
                char c = pw.charAt(i);
                if(vowel.contains(c)) check1 = true;
                if(i!=0 && i!=pw.length()-1){
                    if(vowel.contains(pw.charAt(i-1)) && vowel.contains(pw.charAt(i)) && vowel.contains(pw.charAt(i+1))) check2 = false;
                    if(consonant.contains(pw.charAt(i-1)) && consonant.contains(pw.charAt(i)) && consonant.contains(pw.charAt(i+1))) check2 = false;
                }
                if(i!=0){
                    if(pw.charAt(i-1) == pw.charAt(i) && pw.charAt(i)!='e' && pw.charAt(i)!='o') check3 = false;
                }
            }
            if(check1 && check2 && check3){
                System.out.println("<"+pw+">"+" is acceptable.");
            }else{
                System.out.println("<"+pw+">"+" is not acceptable.");
            }
            pw = br.readLine();
            check1 = false;
            check2 = true;
            check3 = true;
        }
    }
}
