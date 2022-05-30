from manim import *

class PostfixEvaluation(Scene):
    table_kwarg = {
        "include_outer_lines" : True,
    }
    def construct(self):
        #Title
        title = Text("Evaluation of Postfix Expressions")
        self.play(DrawBorderThenFill(title))
        self.wait(2)
        self.play(FadeOut(title))

        #Initialize Stack
        st_list = [Text("1", color=BLACK), Text("2", color=BLACK), Text("3", color=BLACK), Text("4", color=BLACK), Text("5", color=BLACK), Text("6", color=BLACK)]
        st_mat = MobjectTable([st_list], **self.table_kwarg).scale(0.75).to_edge(UP, buff=1)
        st_title = Text("Stack").scale(0.75).next_to(st_mat, DOWN)

        #Initialize input
        ip_title = Text("Input: ").scale(0.75)
        ip_ans = Text("2632*+3/+").scale(0.75)
        ip = VGroup(ip_title, ip_ans).arrange(direction = RIGHT).to_edge(DOWN, buff = 1.25)
        
        #Initialize Central Square
        sq = Square(color = YELLOW).scale(0.5).next_to(st_title, DOWN, buff = 1.25)

        #Creations
        self.play(Create(st_mat), Write(st_title), Write(ip), Create(sq))
        self.wait(1)

        #Process 2
        t2 = Text("2").scale(0.75).move_to(sq.get_center())
        self.play(ReplacementTransform(ip_ans[0], t2))
        self.wait(1)
        self.play(t2.animate.move_to(st_mat.get_entries_without_labels((1,1)).get_center()))
        self.wait(1)

        #Process 6
        t6 = Text("6").scale(0.75).move_to(sq.get_center())
        self.play(ReplacementTransform(ip_ans[1], t6))
        self.wait(1)
        self.play(t6.animate.move_to(st_mat.get_entries_without_labels((1,2)).get_center()))
        self.wait(1)

        #Process 3
        t3 = Text("3").scale(0.75).move_to(sq.get_center())
        self.play(ReplacementTransform(ip_ans[2], t3))
        self.wait(1)
        self.play(t3.animate.move_to(st_mat.get_entries_without_labels((1,3)).get_center()))
        self.wait(1)

        #Process 2a
        t2a = Text("2").scale(0.75).move_to(sq.get_center())
        self.play(ReplacementTransform(ip_ans[3], t2a))
        self.wait(1)
        self.play(t2a.animate.move_to(st_mat.get_entries_without_labels((1,4)).get_center()))
        self.wait(1)

        #Process *
        tstar = Text("*").scale(0.75).move_to(sq.get_center())
        self.play(ReplacementTransform(ip_ans[4], tstar))
        self.wait(1)
        self.play(t3.animate.next_to(sq, LEFT), t2a.animate.next_to(sq, RIGHT))
        self.wait(1)
        t6a = Text("6").scale(0.75).move_to(sq.get_center())
        expr = VGroup(t3, tstar, t2a)
        self.play(ReplacementTransform(expr, t6a))
        self.wait(1)
        self.play(t6a.animate.move_to(st_mat.get_entries_without_labels((1,3)).get_center()))
        self.wait(1)

        #Process +
        tplus = Text("+").scale(0.75).move_to(sq.get_center())
        self.play(ReplacementTransform(ip_ans[5], tplus))
        self.wait(1)
        self.play(t6.animate.next_to(sq, LEFT), t6a.animate.next_to(sq, RIGHT))
        self.wait(1)
        t12 = Text("12").scale(0.75).move_to(sq.get_center())
        expr = VGroup(t6, tplus, t6a)
        self.play(ReplacementTransform(expr, t12))
        self.wait(1)
        self.play(t12.animate.move_to(st_mat.get_entries_without_labels((1,2)).get_center()))
        self.wait(1)

        #Process 3
        t3 = Text("3").scale(0.75).move_to(sq.get_center())
        self.play(ReplacementTransform(ip_ans[6], t3))
        self.wait(1)
        self.play(t3.animate.move_to(st_mat.get_entries_without_labels((1,3)).get_center()))
        self.wait(1)

        #Process /
        tdiv = Text("/").scale(0.75).move_to(sq.get_center())
        self.play(ReplacementTransform(ip_ans[7], tdiv))
        self.wait(1)
        self.play(t12.animate.next_to(sq, LEFT), t3.animate.next_to(sq, RIGHT))
        self.wait(1)
        t4 = Text("4").scale(0.75).move_to(sq.get_center())
        expr = VGroup(t12, tdiv, t3)
        self.play(ReplacementTransform(expr, t4))
        self.wait(1)
        self.play(t4.animate.move_to(st_mat.get_entries_without_labels((1,2)).get_center()))
        self.wait(1)

        #Process +
        tplus = Text("+").scale(0.75).move_to(sq.get_center())
        self.play(ReplacementTransform(ip_ans[8], tplus))
        self.wait(1)
        self.play(t2.animate.next_to(sq, LEFT), t4.animate.next_to(sq, RIGHT))
        self.wait(1)
        t6 = Text("6").scale(0.75).move_to(sq.get_center())
        expr = VGroup(t2, tplus, t4)
        self.play(ReplacementTransform(expr, t6))
        self.wait(1)
        self.play(t6.animate.move_to(st_mat.get_entries_without_labels((1,1)).get_center()))
        self.wait(1)
        
        #Finish
        self.play(t6.animate.move_to(sq.get_center()))
        self.wait(1)
        self.play(Circumscribe(t6))
        self.wait(2)