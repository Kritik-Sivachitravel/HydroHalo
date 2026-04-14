import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef  = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, tx: 0, ty: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail  = trailRef.current;
    if (!cursor || !trail) return;

    document.body.style.cursor = 'none';

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    };

    const animate = () => {
      const { mx, my, tx, ty } = pos.current;
      pos.current.tx += (mx - tx) * 0.12;
      pos.current.ty += (my - ty) * 0.12;
      trail.style.left = pos.current.tx + 'px';
      trail.style.top  = pos.current.ty + 'px';
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    document.addEventListener('mousemove', onMove);

    const grow = () => { cursor.style.width = '20px'; cursor.style.height = '20px'; trail.style.width = '52px'; trail.style.height = '52px'; };
    const shrink = () => { cursor.style.width = '12px'; cursor.style.height = '12px'; trail.style.width = '36px'; trail.style.height = '36px'; };
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-trail" ref={trailRef} />
    </>
  );
}
