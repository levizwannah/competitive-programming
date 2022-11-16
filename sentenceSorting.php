class Solution {

    /**
     * This is faster than 94.44% of the PHP answers
     * @param String $s
     * @return String
     */
    function sortSentence($s) {
        $arr = [];
        $current = "";
        $index = "";
        $s .= " ";
        
        for($i = 0; $i < strlen($s); $i++){
            
            if(preg_match("/\d/", $s[$i])){
                $index .= $s[$i];
                continue;
            } 
            
            if(preg_match("/\s/", $s[$i])){
                $arr[$index] = $current;
                $current = $index = "";
                continue;
            }
            
            $current .= $s[$i];
        }
        
        $sentence = "";
        
        for($i = 1; $i <= count($arr); $i++){
            
            if(!empty($sentence)) $sentence .= " ";
            
            $sentence .= $arr["$i"];
        }
        
        return $sentence;
    }
}
