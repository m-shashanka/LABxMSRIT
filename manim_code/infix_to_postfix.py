from manim import *

class InfixToPostfix(Scene):
    table_kwarg = {
        "include_outer_lines" : True,
    }
    def construct(self):
        #Title
        title = Text("Infix to Postfix Conversion")
        self.play(DrawBorderThenFill(title))
        self.wait(2)
        self.play(FadeOut(title))

        #Initialize Stack
        st_list = [Text("1", color=BLACK), Text("2", color=BLACK), Text("3", color=BLACK), Text("4", color=BLACK), Text("5", color=BLACK), Text("6", color=BLACK)]
        st_mat = MobjectTable([st_list], **self.table_kwarg).scale(0.75).to_edge(UP, buff=1)
        st_title = Text("Stack").scale(0.75).next_to(st_mat, DOWN)

        #Initialize input and output
        op_title = Text("Output: ").scale(0.75)
        op_ans = Text("AB+CDE-*F/-G-", color = BLACK).scale(0.75)
        op = VGroup(op_title, op_ans).arrange(direction = RIGHT).to_edge(DOWN, buff = 0.7)

        ip_title = Text("Input: ").scale(0.75)
        ip_ans = Text("(A+B-C*(D-E)/F)-G").scale(0.75)
        ip = VGroup(ip_title, ip_ans).arrange(direction = RIGHT).next_to(op, UP)

        #Initialize Central Square
        sq = Square(color = YELLOW).scale(0.4).next_to(st_title, DOWN, buff = 1.25)
        sq_title = Text("Check Precedence").scale(0.4).next_to(sq, DOWN)

        #Intialize comparators
        lt = Text("<", color = BLUE).scale(0.75).move_to(sq.get_center())
        gte = Text(">=", color = BLUE).scale(0.75).move_to(sq.get_center())

        #Creation
        self.play(Create(st_mat), Write(st_title), Write(op), Write(ip), Create(sq), Write(sq_title))
        self.wait(1)
        
        #Process lparen1
        tlparen1 = Text("(").scale(0.75).move_to(st_mat.get_entries_without_labels((1,1)).get_center())
        self.play(ReplacementTransform(ip_ans[0], tlparen1))
        self.wait(1)

        #Process A
        tA = Text("A").scale(0.75).move_to(op_ans[0].get_center())
        self.play(ReplacementTransform(ip_ans[1], tA))
        self.wait(1)
        
        #Process +
        tplus = Text("+").scale(0.75).next_to(sq, RIGHT)
        self.play(ReplacementTransform(ip_ans[2], tplus))
        self.wait(1)
        self.play(Circumscribe(tlparen1))
        self.wait(1)
        self.play(tplus.animate.move_to(st_mat.get_entries_without_labels((1,2)).get_center()))
        self.wait(1)

        #Process B
        tB = Text("B").scale(0.75).move_to(op_ans[1].get_center())
        self.play(ReplacementTransform(ip_ans[3], tB))
        self.wait(1)

        #Process -
        tminus = Text("-").scale(0.75).next_to(sq, RIGHT)
        self.play(ReplacementTransform(ip_ans[4], tminus))
        self.wait(1)
        self.play(tplus.animate.next_to(sq, LEFT))
        self.wait(1)
        self.play(Write(gte))
        self.wait(1)
        self.play(Unwrite(gte))
        self.wait(1)
        self.play(tminus.animate.move_to(st_mat.get_entries_without_labels((1,2)).get_center()), tplus.animate.move_to(op_ans[2].get_center()))
        self.wait(1)
    
        #Process C
        tC = Text("C").scale(0.75).move_to(op_ans[3].get_center())
        self.play(ReplacementTransform(ip_ans[5], tC))
        self.wait(1)

        #Process *
        tmul = Text("*").scale(0.75).next_to(sq, RIGHT)
        self.play(ReplacementTransform(ip_ans[6], tmul))
        self.wait(1)
        self.play(tminus.animate.next_to(sq, LEFT))
        self.wait(1)
        self.play(Write(lt))
        self.wait(1)
        self.play(Unwrite(lt))
        self.wait(1)
        self.play(tminus.animate.move_to(st_mat.get_entries_without_labels((1,2)).get_center()), tmul.animate.move_to(st_mat.get_entries_without_labels((1,3))))
        self.wait(1)

        #Process lparen2
        tlparen2 = Text("(").scale(0.75).move_to(st_mat.get_entries_without_labels((1,4)).get_center())
        self.play(ReplacementTransform(ip_ans[7], tlparen2))
        self.wait(1)

        #Process D
        tD = Text("D").scale(0.75).move_to(op_ans[4].get_center())
        self.play(ReplacementTransform(ip_ans[8], tD))
        self.wait(1)

        #Process -2
        tminus2 = Text("-").scale(0.75).next_to(sq, RIGHT)
        self.play(ReplacementTransform(ip_ans[9], tminus2))
        self.wait(1)
        self.play(Circumscribe(tlparen2))
        self.wait(1)
        self.play(tminus2.animate.move_to(st_mat.get_entries_without_labels((1,5)).get_center()))
        self.wait(1)

        #Process E
        tE = Text("E").scale(0.75).move_to(op_ans[5].get_center())
        self.play(ReplacementTransform(ip_ans[10], tE))
        self.wait(1)

        #Process rparen1
        trparen1 = Text(")").scale(0.75).next_to(sq, RIGHT)
        self.play(ReplacementTransform(ip_ans[11], trparen1))
        self.wait(1)
        self.play(Circumscribe(tminus2))
        self.wait(1)
        self.play(tminus2.animate.move_to(op_ans[6].get_center()))
        self.wait(1)
        self.play(Circumscribe(tlparen2))
        self.wait(1)
        self.play(Unwrite(tlparen2))
        self.wait(1)
        self.play(Circumscribe(trparen1))
        self.wait(1)
        self.play(Unwrite(trparen1))
        self.wait(1)

        #Process /
        tdiv = Text("/").scale(0.75).next_to(sq, RIGHT)
        self.play(ReplacementTransform(ip_ans[12], tdiv))
        self.wait(1)
        self.play(tmul.animate.next_to(sq, LEFT))
        self.wait(1)
        gte = Text(">=", color = BLUE).scale(0.75).move_to(sq.get_center())
        self.play(Write(gte))
        self.wait(1)
        self.play(Unwrite(gte))
        self.wait(1)
        self.play(tmul.animate.move_to(op_ans[7].get_center()), tdiv.animate.move_to(st_mat.get_entries_without_labels((1,3))))
        self.wait(1)


        #Process F
        tF = Text("F").scale(0.75).move_to(op_ans[8].get_center())
        self.play(ReplacementTransform(ip_ans[13], tF))
        self.wait(1)

        #Process rparen2
        trparen2 = Text(")").scale(0.75).next_to(sq, RIGHT)
        self.play(ReplacementTransform(ip_ans[14], trparen2))
        self.wait(1)
        self.play(Circumscribe(tdiv))
        self.wait(1)
        self.play(tdiv.animate.move_to(op_ans[9].get_center()))
        self.wait(1)
        self.play(Circumscribe(tminus))
        self.wait(1)
        self.play(tminus.animate.move_to(op_ans[10].get_center()))
        self.wait(1)
        self.play(Circumscribe(tlparen1))
        self.wait(1)
        self.play(Unwrite(tlparen1))
        self.wait(1)
        self.play(Circumscribe(trparen2))
        self.wait(1)
        self.play(Unwrite(trparen2))
        self.wait(1)
        
        #Process -3
        tminus3 = Text("-").scale(0.75).next_to(sq, RIGHT)
        self.play(ReplacementTransform(ip_ans[15], tminus3))
        self.wait(1)
        self.play(tminus3.animate.move_to(st_mat.get_entries_without_labels((1,1)).get_center()))
        self.wait(1)

        #Process G
        tG = Text("G").scale(0.75).move_to(op_ans[11].get_center())
        self.play(ReplacementTransform(ip_ans[16], tG))
        self.wait(1)

        #Clear the stack
        self.play(tminus3.animate.move_to(op_ans[12].get_center()))
        self.wait(2)