import { Component, inject, signal } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';
import {
  ChildrenOutletContexts,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  animations: [
    trigger('routeTransition', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(12px)' }),
            animate(
              '360ms cubic-bezier(0.2, 0.95, 0.2, 1)',
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppShellComponent {
  private readonly contexts = inject(ChildrenOutletContexts);
  protected readonly mobileMenuOpen = signal(false);

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected getRouteAnimationData(): string {
    return this.contexts.getContext('primary')?.route?.snapshot.data['animation'] ?? 'default';
  }
}
